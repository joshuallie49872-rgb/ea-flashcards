const MASTERY_TARGET = 3;
const STORAGE_KEY = "eaFlashcardsProgressV1";

let currentProfile = null;
let currentDeckId = null;
let currentIndex = 0;
let currentOrder = [];
let isFlipped = false;

const $ = (id) => document.getElementById(id);

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function ensureProfileDeck(profile, deckId) {
  const all = loadProgress();
  all[profile] ||= {};
  all[profile][deckId] ||= {};
  saveProgress(all);
  return all;
}

function getCardProgress(profile, deckId, cardId) {
  const all = loadProgress();
  return all?.[profile]?.[deckId]?.[cardId] || {
    correct: 0,
    wrong: 0,
    mastered: false
  };
}

function setCardProgress(profile, deckId, cardId, patch) {
  const all = ensureProfileDeck(profile, deckId);
  const old = all[profile][deckId][cardId] || { correct: 0, wrong: 0, mastered: false };
  all[profile][deckId][cardId] = { ...old, ...patch };
  saveProgress(all);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

function chooseProfile(profile) {
  currentProfile = profile;
  $("profileBadge").textContent = profile;
  renderDecks();
  showScreen("deckScreen");
}

function deckStats(deck) {
  const all = loadProgress();
  const dp = all?.[currentProfile]?.[deck.id] || {};
  let mastered = 0, weak = 0, seen = 0;
  deck.cards.forEach(card => {
    const p = dp[card.id];
    if (p) {
      seen++;
      if (p.mastered) mastered++;
      if ((p.wrong || 0) > (p.correct || 0)) weak++;
    }
  });
  return { mastered, weak, seen };
}

function renderDecks() {
  const grid = $("deckGrid");
  grid.innerHTML = "";
  EA_DECKS.forEach(deck => {
    const stats = deckStats(deck);
    const btn = document.createElement("button");
    btn.className = "deck-card";
    btn.innerHTML = `
      <div>
        <div class="eyebrow">Video ${deck.video}</div>
        <h3>${deck.title}</h3>
      </div>
      <div class="deck-meta">
        ${deck.cards.length} cards<br>
        ${stats.mastered} mastered · ${stats.seen} seen
      </div>`;
    btn.addEventListener("click", () => openDeck(deck.id));
    grid.appendChild(btn);
  });
}

function getCurrentDeck() {
  return EA_DECKS.find(d => d.id === currentDeckId);
}

function buildOrder() {
  const deck = getCurrentDeck();
  if (!deck) return [];

  const filter = $("filterSelect").value;
  let cards = deck.cards.filter(card => {
    const p = getCardProgress(currentProfile, currentDeckId, card.id);
    if (filter === "all") return true;
    if (filter === "mastered") return p.mastered;
    if (filter === "weak") return (p.wrong || 0) > (p.correct || 0) && !p.mastered;
    return !p.mastered;
  });

  if ($("modeSelect").value === "random") {
    cards = [...cards];
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }

  return cards.map(c => c.id);
}

function openDeck(deckId) {
  currentDeckId = deckId;
  currentIndex = 0;
  const deck = getCurrentDeck();
  $("studyDeckLabel").textContent = `Video ${deck.video}`;
  $("studyDeckTitle").textContent = deck.title;
  rebuildStudyOrder();
  showScreen("studyScreen");
}

function rebuildStudyOrder() {
  currentOrder = buildOrder();
  if (currentIndex >= currentOrder.length) currentIndex = 0;
  renderCard();
}

function getCurrentCard() {
  const deck = getCurrentDeck();
  const id = currentOrder[currentIndex];
  return deck?.cards.find(c => c.id === id);
}

function renderCard() {
  const deck = getCurrentDeck();
  const card = getCurrentCard();
  isFlipped = false;
  $("flashcard").classList.remove("flipped");

  if (!deck || currentOrder.length === 0 || !card) {
    $("questionText").textContent =
      deck && deck.cards.length === 0
        ? "This deck has no cards yet."
        : "No cards match this study filter.";
    $("answerText").textContent = "";
    $("positionStat").textContent = `0 / ${currentOrder.length}`;
    updateStats();
    setStudyButtons(false);
    return;
  }

  $("questionText").textContent = card.q;
  $("answerText").textContent = card.a;
  $("positionStat").textContent = `${currentIndex + 1} / ${currentOrder.length}`;
  updateStats();
  setStudyButtons(true);
}

function setStudyButtons(enabled) {
  ["wrongBtn","correctBtn","prevBtn","nextBtn","resetCardBtn"].forEach(id => {
    $(id).disabled = !enabled;
  });
}

function updateStats() {
  const deck = getCurrentDeck();
  if (!deck) return;
  const stats = deckStats(deck);
  $("masteredStat").textContent = `Mastered ${stats.mastered}`;
  $("weakStat").textContent = `Weak ${stats.weak}`;
}

function rateCard(correct) {
  const card = getCurrentCard();
  if (!card) return;
  const p = getCardProgress(currentProfile, currentDeckId, card.id);

  if (correct) {
    const newCorrect = (p.correct || 0) + 1;
    setCardProgress(currentProfile, currentDeckId, card.id, {
      correct: newCorrect,
      mastered: newCorrect >= MASTERTRY()
    });
  } else {
    setCardProgress(currentProfile, currentDeckId, card.id, {
      wrong: (p.wrong || 0) + 1,
      mastered: false
    });
  }

  if ($("filterSelect").value === "active") {
    const nextId = currentOrder[currentIndex + 1] || currentOrder[0];
    currentOrder = buildOrder();
    if (currentOrder.length === 0) {
      currentIndex = 0;
    } else {
      const idx = currentOrder.indexOf(nextId);
      currentIndex = idx >= 0 ? idx : Math.min(currentIndex, currentOrder.length - 1);
    }
  } else {
    currentIndex = Math.min(currentIndex + 1, Math.max(0, currentOrder.length - 1));
  }
  renderCard();
  renderDecks();
}

function masteryTarget() { return MASTERY_TARGET; }

function rateCardFixed(correct) {
  const card = getCurrentCard();
  if (!card) return;
  const p = getCardProgress(currentProfile, currentDeckId, card.id);

  if (correct) {
    const newCorrect = (p.correct || 0) + 1;
    setCardProgress(currentProfile, currentDeckId, card.id, {
      correct: newCorrect,
      mastered: newCorrect >= masteryTarget()
    });
  } else {
    setCardProgress(currentProfile, currentDeckId, card.id, {
      wrong: (p.wrong || 0) + 1,
      mastered: false
    });
  }

  const nextId = currentOrder[currentIndex + 1] || currentOrder[0];
  currentOrder = buildOrder();
  if (currentOrder.length === 0) {
    currentIndex = 0;
  } else {
    const idx = currentOrder.indexOf(nextId);
    currentIndex = idx >= 0 ? idx : Math.min(currentIndex, currentOrder.length - 1);
  }
  renderCard();
  renderDecks();
}

function flipCard() {
  if (!getCurrentCard()) return;
  isFlipped = !isFlipped;
  $("flashcard").classList.toggle("flipped", isFlipped);
}

function move(delta) {
  if (!currentOrder.length) return;
  currentIndex = (currentIndex + delta + currentOrder.length) % currentOrder.length;
  renderCard();
}

function resetCurrentCard() {
  const card = getCurrentCard();
  if (!card) return;
  if (!confirm("Reset progress for this card?")) return;
  setCardProgress(currentProfile, currentDeckId, card.id, { correct: 0, wrong: 0, mastered: false });
  rebuildStudyOrder();
  renderDecks();
}

function resetCurrentDeck() {
  const deck = getCurrentDeck();
  if (!deck) return;
  if (!confirm(`Reset ALL progress for ${deck.title}?`)) return;
  const all = loadProgress();
  all[currentProfile] ||= {};
  all[currentProfile][currentDeckId] = {};
  saveProgress(all);
  currentIndex = 0;
  rebuildStudyOrder();
  renderDecks();
}

document.querySelectorAll(".profile-button").forEach(btn => {
  btn.addEventListener("click", () => chooseProfile(btn.dataset.profile));
});
$("switchProfileBtn").addEventListener("click", () => {
  currentProfile = null;
  showScreen("profileScreen");
});
$("backToDecksBtn").addEventListener("click", () => {
  renderDecks();
  showScreen("deckScreen");
});
$("flashcard").addEventListener("click", flipCard);
$("prevBtn").addEventListener("click", () => move(-1));
$("nextBtn").addEventListener("click", () => move(1));
$("wrongBtn").addEventListener("click", () => rateCardFixed(false));
$("correctBtn").addEventListener("click", () => rateCardFixed(true));
$("modeSelect").addEventListener("change", () => {
  currentIndex = 0;
  rebuildStudyOrder();
});
$("filterSelect").addEventListener("change", () => {
  currentIndex = 0;
  rebuildStudyOrder();
});
$("resetCardBtn").addEventListener("click", resetCurrentCard);
$("resetDeckBtn").addEventListener("click", resetCurrentDeck);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

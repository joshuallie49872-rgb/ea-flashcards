const EXAM_PROGRESS_KEY = "eaExamProgressV2";
const MOCK_SECONDS = 3.5 * 60 * 60;

let examMode = "practice";
let examQuestions = [];
let examIndex = 0;
let examAnswers = {};
let examLocked = {};
let examTimerId = null;
let examSecondsLeft = MOCK_SECONDS;
let examFinished = false;

function loadExamProgress() {
  try { return JSON.parse(localStorage.getItem(EXAM_PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

function saveExamProgress(data) {
  localStorage.setItem(EXAM_PROGRESS_KEY, JSON.stringify(data));
}

function recordExamAttempt(questionId, correct) {
  if (!currentProfile) return;
  const all = loadExamProgress();
  all[currentProfile] ||= {};
  const old = all[currentProfile][questionId] || { attempts: 0, correct: 0, wrong: 0 };
  all[currentProfile][questionId] = {
    attempts: old.attempts + 1,
    correct: old.correct + (correct ? 1 : 0),
    wrong: old.wrong + (correct ? 0 : 1)
  };
  saveExamProgress(all);
}

function shuffleExam(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function weightedShuffle(items) {
  return items
    .map(q => {
      const weight = Math.max(0.25, Number(q.priority || 1));
      const u = Math.max(0.000001, Math.random());
      return { q, key: Math.pow(u, 1 / weight) };
    })
    .sort((a,b) => b.key - a.key)
    .map(x => x.q);
}

function getPracticePool() {
  const source = $("practicePool").value;
  const domain = $("practiceDomain").value;
  let pool = source === "exam"
    ? EA_CURATED_BANK
    : source === "lecture"
      ? EA_DERIVED_BANK
      : EA_FULL_BANK;

  if (domain !== "all") pool = pool.filter(q => String(q.domain) === domain);
  return pool;
}

function openExamSetup() {
  stopExamTimer();
  examFinished = false;
  updateBankStats();
  showScreen("examSetupScreen");
}

function updateBankStats() {
  if (!$("bankStat")) return;
  $("bankStat").textContent =
    `${EA_BANK_STATS.total.toLocaleString()} total A–D questions · ${EA_BANK_STATS.curated} hand-built exam-style · ${EA_BANK_STATS.lecture.toLocaleString()} lecture-review`;
}

function startPractice() {
  const countRaw = $("practiceCount").value;
  const order = $("practiceOrder").value;
  let pool = getPracticePool();

  if (order === "random") pool = shuffleExam(pool);
  else pool = [...pool].sort((a,b) => (a.order || 0) - (b.order || 0));

  const count = countRaw === "all" ? pool.length : Number(countRaw);
  examMode = "practice";
  examQuestions = pool.slice(0, Math.min(count, pool.length));
  beginExamSession();
}

function sampleDomain(domain, count, usedIds) {
  let pool = EA_FULL_BANK.filter(q =>
    q.domain === domain &&
    q.examEligible &&
    !usedIds.has(q.id)
  );

  // Hand-written questions and high-priority core rules are intentionally favored.
  pool = weightedShuffle(pool);
  const chosen = pool.slice(0, Math.min(count, pool.length));
  chosen.forEach(q => usedIds.add(q.id));
  return chosen;
}

function buildMockExam() {
  const counts = EA_EXAM_BLUEPRINT.bankCounts || [16,20,20,18,13,13];
  const used = new Set();
  let chosen = [];

  counts.forEach((count, idx) => {
    chosen.push(...sampleDomain(idx + 1, count, used));
  });

  if (chosen.length < 100) {
    const fill = weightedShuffle(EA_FULL_BANK.filter(q => q.examEligible && !used.has(q.id)));
    chosen.push(...fill.slice(0, 100 - chosen.length));
  }

  return shuffleExam(chosen.slice(0, 100));
}

function startMockExam() {
  examMode = "mock";
  examQuestions = buildMockExam();
  beginExamSession();
  examSecondsLeft = MOCK_SECONDS;
  startExamTimer();
}

function beginExamSession() {
  examIndex = 0;
  examAnswers = {};
  examLocked = {};
  examFinished = false;
  $("examModeLabel").textContent = examMode === "mock" ? "100-question mock exam" : "Practice questions";
  $("examFinishBtn").classList.toggle("hidden", examMode !== "mock");
  $("examTimer").classList.toggle("hidden", examMode !== "mock");
  showScreen("examScreen");
  renderExamQuestion();
}

function currentExamQuestion() {
  return examQuestions[examIndex];
}

function renderExamQuestion() {
  const q = currentExamQuestion();
  if (!q) return;

  $("examPosition").textContent = `${examIndex + 1} / ${examQuestions.length}`;
  $("examDomain").textContent = `Domain ${q.domain}: ${EA_DOMAIN_NAMES[q.domain]}`;
  $("examQuestionText").textContent = q.q;

  const badge = $("questionSource");
  badge.textContent = q.source === "curated" ? "Exam-style" : q.sourceLabel || "Lecture review";
  badge.className = "source-badge " + (q.source === "curated" ? "source-exam" : "source-review");

  const choices = $("examChoices");
  choices.innerHTML = "";
  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "exam-choice";
    btn.type = "button";
    btn.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + idx)}</span><span>${choice}</span>`;

    const selected = examAnswers[q.id] === idx;
    if (selected) btn.classList.add("selected");

    if (examMode === "practice" && examLocked[q.id]) {
      btn.disabled = true;
      if (idx === q.answer) btn.classList.add("choice-correct");
      if (selected && idx !== q.answer) btn.classList.add("choice-wrong");
    } else {
      btn.addEventListener("click", () => chooseExamAnswer(idx));
    }
    choices.appendChild(btn);
  });

  const feedback = $("examFeedback");
  const isAnsweredPractice = examMode === "practice" && examLocked[q.id];
  feedback.classList.toggle("hidden", !isAnsweredPractice);

  if (isAnsweredPractice) {
    const correct = examAnswers[q.id] === q.answer;
    $("examFeedbackTitle").textContent = correct
      ? "Correct"
      : `Incorrect — correct answer: ${String.fromCharCode(65 + q.answer)}`;
    $("examFeedbackText").textContent = q.explanation;
    $("examReference").textContent = q.reference ? `Reference: ${q.reference}` : "";
    feedback.classList.toggle("feedback-correct", correct);
    feedback.classList.toggle("feedback-wrong", !correct);
  } else {
    feedback.classList.remove("feedback-correct", "feedback-wrong");
  }

  $("examPrevBtn").disabled = examIndex === 0;
  $("examNextBtn").textContent = examIndex === examQuestions.length - 1
    ? (examMode === "mock" ? "Finish" : "Results")
    : "Next";

  updateExamAnsweredStat();
}

function chooseExamAnswer(idx) {
  const q = currentExamQuestion();
  if (!q) return;
  if (examMode === "practice" && examLocked[q.id]) return;

  examAnswers[q.id] = idx;

  if (examMode === "practice") {
    examLocked[q.id] = true;
    recordExamAttempt(q.id, idx === q.answer);
  }

  renderExamQuestion();
}

function moveExam(delta) {
  const next = examIndex + delta;
  if (next < 0 || next >= examQuestions.length) return;
  examIndex = next;
  renderExamQuestion();
}

function examNext() {
  if (examIndex < examQuestions.length - 1) {
    examIndex++;
    renderExamQuestion();
    return;
  }
  finishExam();
}

function updateExamAnsweredStat() {
  const answered = examQuestions.filter(q => examAnswers[q.id] !== undefined).length;
  $("examAnswered").textContent = `Answered ${answered}`;
}

function startExamTimer() {
  stopExamTimer();
  renderExamTimer();
  examTimerId = setInterval(() => {
    examSecondsLeft--;
    renderExamTimer();
    if (examSecondsLeft <= 0) {
      stopExamTimer();
      finishExam(true);
    }
  }, 1000);
}

function stopExamTimer() {
  if (examTimerId) clearInterval(examTimerId);
  examTimerId = null;
}

function renderExamTimer() {
  const total = Math.max(0, Math.floor(examSecondsLeft));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  $("examTimer").textContent = `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function finishExam(timeExpired = false) {
  if (examFinished) return;

  if (examMode === "mock" && !timeExpired) {
    const unanswered = examQuestions.filter(q => examAnswers[q.id] === undefined).length;
    const msg = unanswered
      ? `Finish exam with ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}?`
      : "Finish and score this mock exam?";
    if (!confirm(msg)) return;
  }

  examFinished = true;
  stopExamTimer();

  if (examMode === "mock") {
    examQuestions.forEach(q => recordExamAttempt(q.id, examAnswers[q.id] === q.answer));
  }

  renderExamResults(timeExpired);
  showScreen("examResultsScreen");
}

function renderExamResults(timeExpired) {
  const total = examQuestions.length;
  const answered = examQuestions.filter(q => examAnswers[q.id] !== undefined).length;
  const correct = examQuestions.filter(q => examAnswers[q.id] === q.answer).length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  $("resultMode").textContent = examMode === "mock" ? "Mock exam results" : "Practice results";
  $("resultScore").textContent = `${correct} / ${total} (${pct}%)`;
  $("resultAnswered").textContent = `Answered ${answered} of ${total}`;
  $("resultNotice").textContent = timeExpired
    ? "Time expired. Unanswered questions were scored incorrect."
    : "This is practice accuracy, not the IRS scaled score. The real SEE includes experimental questions that are not identified.";

  const domainWrap = $("resultDomains");
  domainWrap.innerHTML = "";
  [...new Set(examQuestions.map(q => q.domain))].sort().forEach(domain => {
    const qs = examQuestions.filter(q => q.domain === domain);
    const right = qs.filter(q => examAnswers[q.id] === q.answer).length;
    const row = document.createElement("div");
    row.className = "result-domain-row";
    row.innerHTML = `
      <div><strong>Domain ${domain}</strong><span>${EA_DOMAIN_NAMES[domain]}</span></div>
      <div>${right} / ${qs.length} · ${Math.round((right / qs.length) * 100)}%</div>
    `;
    domainWrap.appendChild(row);
  });

  const missed = examQuestions.filter(q => examAnswers[q.id] !== q.answer);
  $("missedCount").textContent = missed.length ? `${missed.length} missed / unanswered` : "No missed questions";
  const missedWrap = $("missedQuestions");
  missedWrap.innerHTML = "";

  missed.forEach((q, n) => {
    const selected = examAnswers[q.id];
    const box = document.createElement("details");
    box.className = "missed-item";
    box.innerHTML = `
      <summary>${n + 1}. ${q.q}</summary>
      <div class="missed-body">
        <div><strong>Your answer:</strong> ${selected === undefined ? "Unanswered" : String.fromCharCode(65 + selected) + ". " + q.choices[selected]}</div>
        <div><strong>Correct:</strong> ${String.fromCharCode(65 + q.answer)}. ${q.choices[q.answer]}</div>
        <p>${q.explanation}</p>
        <div class="reference-line">Reference: ${q.reference || "—"}</div>
      </div>
    `;
    missedWrap.appendChild(box);
  });
}

function exitExamToDecks() {
  stopExamTimer();
  renderDecks();
  showScreen("deckScreen");
}

$("openPracticeBtn").addEventListener("click", openExamSetup);
$("openMockBtn").addEventListener("click", startMockExam);
$("startPracticeBtn").addEventListener("click", startPractice);
$("examSetupBackBtn").addEventListener("click", exitExamToDecks);
$("examBackBtn").addEventListener("click", () => {
  if (examMode === "mock" && Object.keys(examAnswers).length &&
      !confirm("Leave this mock exam? Current answers will be discarded.")) return;
  exitExamToDecks();
});
$("examPrevBtn").addEventListener("click", () => moveExam(-1));
$("examNextBtn").addEventListener("click", examNext);
$("examFinishBtn").addEventListener("click", () => finishExam(false));
$("resultsBackBtn").addEventListener("click", exitExamToDecks);
$("newPracticeBtn").addEventListener("click", openExamSetup);
$("newMockBtn").addEventListener("click", startMockExam);

updateBankStats();

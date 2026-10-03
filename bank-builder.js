// Builds a large A-D practice bank from the existing lecture decks.
// Curated exam-style questions in data/exam-bank.js are kept separate and weighted
// more heavily in mock exams. Lecture-derived questions are primarily for repetition.

const EA_DOMAIN_NAMES = {
  1: "Preliminary Work & Taxpayer Data",
  2: "Income & Assets",
  3: "Deductions & Credits",
  4: "Taxation",
  5: "Advising the Individual Taxpayer",
  6: "Specialized Returns for Individuals"
};

const EA_DEFAULT_DECK_DOMAIN = {
  "video-1": 1,
  "video-2": 2,
  "video-3": 2,
  "video-4": 3,
  "video-5": 3,
  "video-6": 4,
  "video-7": 6
};

const EA_DOMAIN_KEYWORDS = {
  1: ["filing status","dependent","qualifying child","qualifying relative","head of household","surviving spouse","standard deduction","filing requirement","filing threshold","resident alien","nonresident alien","substantial presence","citizenship","itin","social security number","taxpayer identification","dependent test"],
  2: ["gross income","wages","salary","tip","interest","dividend","capital gain","capital loss","basis","sale","stock","bond","rental","royalty","scholarship","barter","cancellation of debt","alimony","gambling","unemployment","annuity","pension","ira distribution","gift basis","inherited","property"],
  3: ["deduction","credit","medical","charitable","salt","mortgage interest","student loan","education credit","aotc","lifetime learning","child tax credit","earned income credit","eitc","dependent care","qbi","qualified business income","hsa","health savings","premium tax credit","tips deduction","overtime deduction","vehicle loan interest","senior deduction"],
  4: ["alternative minimum","amt","self-employment tax","schedule se","social security benefit","additional medicare","net investment income","niit","estimated tax","underpayment","household employee","schedule h","clergy","minister","combat pay","tax calculation","total tax","employment tax"],
  5: ["advise","planning","strategy","recordkeeping","record keeping","estimated payment","withholding planning","divorce","injured spouse","innocent spouse","refund claim","amended return","cash basis","timing","retirement planning","tax planning"],
  6: ["estate","gift tax","form 706","form 709","fbar","fincen","form 8938","foreign corporation","form 5471","form 8865","form 3520","international","foreign financial","amended return","1040-x","decedent","portability","marital deduction"]
};

const EA_CORE_KEYWORDS = [
  "filing status","dependent","qualifying child","qualifying relative","head of household",
  "standard deduction","gross income","wages","interest","dividend","capital gain","capital loss",
  "basis","rental","cancellation of debt","ira","social security","medical","charitable",
  "child tax credit","earned income credit","eitc","premium tax credit","education credit",
  "qbi","self-employment","estimated tax","alternative minimum","amt","estate","gift tax",
  "fbar","form 8938","injured spouse","innocent spouse"
];

const EA_WEAK_CONTEXT_PATTERNS = [
  /\bin the (?:\w+ )?example\b/i,
  /\bthat example\b/i,
  /\bthis example\b/i,
  /\bas discussed\b/i,
  /\bin the discussion\b/i,
  /\bthe discussion\b/i,
  /\bshown above\b/i,
  /\bshown below\b/i,
  /\bat this point\b/i,
  /\bwhat does this mean\b/i,
  /\bwhy does that\b/i,
  /\bwhy is that\b/i,
  /\bwhat happens next\b/i,
  /\bthe chart\b/i,
  /\bthe slide\b/i,
  /\bthe lecture\b/i,
  /\bthe video\b/i
];

function eaHash(text) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function eaSeededShuffle(items, seedText) {
  const arr = [...items];
  let seed = eaHash(seedText) || 1;
  const rand = () => {
    seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
    return (seed >>> 0) / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function eaNormalize(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function eaAnswerKind(answer) {
  const a = eaNormalize(answer);
  if (/^(yes|no)[\s,.!;:-]/i.test(a) || /^(yes|no)\.?$/i.test(a)) return "yesno";
  if (/\$[\d,]+/.test(a)) return "money";
  if (/\b\d+(?:\.\d+)?%\b/.test(a)) return "percent";
  if (/\bform\s+\d|schedule\s+[a-z0-9]/i.test(a)) return "form";
  if (/\b(?:day|days|month|months|year|years|age|under age|over age)\b/i.test(a) && /\d/.test(a)) return "time";
  if (/^\d[\d,]*(?:\.\d+)?\.?$/.test(a)) return "number";
  if (a.length <= 18) return "short";
  if (a.length <= 70) return "medium";
  return "long";
}

function eaExtractNumber(answer) {
  const m = eaNormalize(answer).match(/\$?([\d,]+(?:\.\d+)?)/);
  return m ? Number(m[1].replace(/,/g, "")) : null;
}

function eaFormatVariant(original, value) {
  const a = eaNormalize(original);
  if (/\$/.test(a)) return "$" + Math.round(value).toLocaleString("en-US") + ".";
  if (/%/.test(a)) return String(Number(value.toFixed(2))).replace(/\.0+$/, "") + "%.";
  if (/\bage\b/i.test(a)) return a.replace(/\d[\d,]*(?:\.\d+)?/, String(Math.round(value)));
  return a.replace(/\d[\d,]*(?:\.\d+)?/, String(Number(value.toFixed(2))));
}

function eaNumericDistractors(answer) {
  const n = eaExtractNumber(answer);
  if (!Number.isFinite(n) || n === 0) return [];
  const factors = n >= 1000 ? [0.5, 0.75, 1.25, 1.5] : [0.5, 0.8, 1.2, 1.5];
  const vals = factors.map(f => eaFormatVariant(answer, n * f));
  return [...new Set(vals)].filter(x => eaNormalize(x) !== eaNormalize(answer));
}

function eaGenericYesNoDistractors(answer) {
  const yes = /^yes\b/i.test(eaNormalize(answer));
  return yes
    ? ["No.", "Only if the taxpayer itemizes deductions.", "Only if the IRS gives advance approval."]
    : ["Yes.", "Yes, but only if the taxpayer itemizes deductions.", "Yes, but only when reported on Form 1099."];
}

function eaTokenSet(text) {
  const stop = new Set(["the","a","an","and","or","of","to","in","for","is","are","be","can","what","how","when","does","do","with","on","as","if","from","by","taxpayer","tax","return","generally"]);
  return new Set(eaNormalize(text).toLowerCase().replace(/[^a-z0-9$% -]/g," ").split(/\s+/).filter(w => w.length > 2 && !stop.has(w)));
}

function eaSimilarity(a, b) {
  const A = eaTokenSet(a), B = eaTokenSet(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  A.forEach(x => { if (B.has(x)) hit++; });
  return hit / Math.max(A.size, B.size);
}

function eaClassifyDomain(deck, card) {
  const text = (card.q + " " + card.a).toLowerCase();
  let best = EA_DEFAULT_DECK_DOMAIN[deck.id] || 1;
  let bestScore = 0;
  Object.entries(EA_DOMAIN_KEYWORDS).forEach(([domain, terms]) => {
    let score = 0;
    terms.forEach(term => { if (text.includes(term)) score++; });
    if (score > bestScore) { bestScore = score; best = Number(domain); }
  });
  return best;
}

function eaPriority(question, answer, curated = false) {
  if (curated) return 6;
  const text = (question + " " + answer).toLowerCase();
  let p = 1;
  EA_CORE_KEYWORDS.forEach(k => { if (text.includes(k)) p += 0.55; });
  if (/\b(2025|current year)\b/i.test(text)) p += 0.5;
  if (/\b(form|schedule)\s+[0-9a-z-]+/i.test(text)) p += 0.35;
  return Math.min(5, Math.max(1, p));
}

function eaExamSuitable(card) {
  const q = eaNormalize(card.q);
  const a = eaNormalize(card.a);
  if (q.length < 24 || a.length < 2) return false;
  if (EA_WEAK_CONTEXT_PATTERNS.some(re => re.test(q))) return false;
  if (/^(why|where on|what line|what box|what is the purpose)/i.test(q)) return false;
  if (/\b(obscure|new top-of-return box|the instructor|the speaker)\b/i.test(q)) return false;
  return true;
}

function eaMakeChoices(deck, card, cardIndex) {
  const correct = eaNormalize(card.a);
  let distractors = [];

  const kind = eaAnswerKind(correct);
  if (kind === "yesno") distractors.push(...eaGenericYesNoDistractors(correct));
  if (["money","percent","number","time"].includes(kind)) distractors.push(...eaNumericDistractors(correct));

  const nearby = [];
  for (let distance = 1; distance <= 28; distance++) {
    for (const idx of [cardIndex - distance, cardIndex + distance]) {
      if (idx < 0 || idx >= deck.cards.length) continue;
      const candidate = deck.cards[idx];
      const ans = eaNormalize(candidate.a);
      if (!ans || ans === correct) continue;
      const sameKind = eaAnswerKind(ans) === kind;
      const sim = eaSimilarity(card.q + " " + correct, candidate.q + " " + ans);
      nearby.push({ ans, score: (sameKind ? 2 : 0) + sim * 3 - distance / 100 });
    }
  }

  nearby.sort((a,b) => b.score - a.score);
  distractors.push(...nearby.map(x => x.ans));

  // If the nearby topic window is not enough, use same-kind answers from the deck.
  if (distractors.length < 8) {
    deck.cards.forEach(other => {
      const ans = eaNormalize(other.a);
      if (ans && ans !== correct && eaAnswerKind(ans) === kind) distractors.push(ans);
    });
  }

  const unique = [];
  const seen = new Set([correct.toLowerCase()]);
  for (const d of distractors) {
    const clean = eaNormalize(d);
    const key = clean.toLowerCase();
    if (!clean || seen.has(key)) continue;
    // Avoid distractors that are almost identical to the correct answer.
    if (eaSimilarity(clean, correct) > 0.88) continue;
    seen.add(key);
    unique.push(clean);
    if (unique.length === 3) break;
  }

  const fallback = ["None of the above.", "Only when a special election is made.", "Only if specifically required by the IRS."];
  for (const d of fallback) {
    if (unique.length >= 3) break;
    if (!seen.has(d.toLowerCase())) unique.push(d);
  }

  const raw = [correct, ...unique.slice(0,3)];
  const shuffled = eaSeededShuffle(raw, card.id + "::choices");
  return {
    choices: shuffled,
    answer: shuffled.indexOf(correct)
  };
}

function eaBuildDerivedBank() {
  const out = [];
  EA_DECKS.forEach((deck, deckIndex) => {
    deck.cards.forEach((card, cardIndex) => {
      const made = eaMakeChoices(deck, card, cardIndex);
      const domain = eaClassifyDomain(deck, card);
      out.push({
        id: "review-" + card.id,
        sourceId: card.id,
        source: "lecture",
        sourceLabel: "Video " + deck.video,
        order: deckIndex * 10000 + cardIndex,
        domain,
        topic: deck.title,
        q: eaNormalize(card.q),
        choices: made.choices,
        answer: made.answer,
        explanation: eaNormalize(card.a),
        reference: "Lecture review · Video " + deck.video,
        priority: eaPriority(card.q, card.a, false),
        examEligible: eaExamSuitable(card)
      });
    });
  });
  return out;
}

function eaBuildCuratedBank() {
  return EA_EXAM_BANK.map((q, index) => ({
    ...q,
    source: "curated",
    sourceLabel: "Exam-style",
    order: 900000 + index,
    priority: eaPriority(q.q, q.explanation || q.choices[q.answer], true),
    examEligible: true
  }));
}

const EA_DERIVED_BANK = eaBuildDerivedBank();
const EA_CURATED_BANK = eaBuildCuratedBank();
const EA_FULL_BANK = [...EA_DERIVED_BANK, ...EA_CURATED_BANK];

const EA_BANK_STATS = {
  total: EA_FULL_BANK.length,
  lecture: EA_DERIVED_BANK.length,
  curated: EA_CURATED_BANK.length,
  examEligible: EA_FULL_BANK.filter(q => q.examEligible).length
};

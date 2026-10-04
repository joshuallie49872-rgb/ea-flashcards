// Rebuilds the lecture material into standalone EA-style multiple-choice questions.
// The original lecture cards are used only as source facts. They are not shown as flashcards.

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

const EA_REJECT_PATTERNS = [
  /\bexample\b/i,
  /\bthat example\b/i,
  /\bthis example\b/i,
  /\bas discussed\b/i,
  /\bdiscussion\b/i,
  /\bthe discussion\b/i,
  /\bshown above\b/i,
  /\bshown below\b/i,
  /\bat this point\b/i,
  /\bwhat happens next\b/i,
  /\bchart\b/i,
  /\bslide\b/i,
  /\blecture\b/i,
  /\bvideo\b/i,
  /\binstructor\b/i,
  /\bspeaker\b/i,
  /\bobscure\b/i,
  /\bdo you need to memorize\b/i,
  /\bwhat did .* say\b/i
];

const EA_ANSWER_FAMILIES = [
  ["Earned income.","Unearned income.","Tax-exempt income.","Self-employment income."],
  ["Unearned income.","Earned income.","Tax-exempt income.","Self-employment income."],
  ["Adjusted gross income (AGI).","Gross income.","Taxable income.","Total tax."],
  ["Taxable income.","Adjusted gross income (AGI).","Gross income.","Total tax."],
  ["Gross income.","Adjusted gross income (AGI).","Taxable income.","Total payments."],
  ["Married Filing Jointly.","Married Filing Separately.","Head of Household.","Single."],
  ["Married Filing Separately.","Married Filing Jointly.","Head of Household.","Single."],
  ["Head of Household.","Single.","Married Filing Separately.","Qualifying Surviving Spouse."],
  ["Single.","Head of Household.","Married Filing Jointly.","Married Filing Separately."],
  ["Long-term capital gain.","Short-term capital gain.","Ordinary income.","Tax-exempt income."],
  ["Short-term capital gain.","Long-term capital gain.","Ordinary income.","Section 1231 gain."],
  ["Capital asset.","Ordinary income property.","Section 1231 property.","Inventory."],
  ["Form 1040-X.","Form 1040-NR.","Form 4868.","Form 2848."],
  ["Form 1040-NR.","Form 1040-X.","Form 1040-SR.","Form 709."],
  ["Schedule A.","Schedule C.","Schedule D.","Schedule E."],
  ["Schedule C.","Schedule E.","Schedule F.","Schedule A."],
  ["Schedule D.","Schedule C.","Schedule E.","Schedule SE."],
  ["Schedule E.","Schedule C.","Schedule D.","Schedule F."]
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
  return String(text || "").replace(/\s+/g, " ").replace(/\s+([?.!,;:])/g, "$1").trim();
}

function eaTrimPeriod(text) {
  return eaNormalize(text).replace(/[.]+$/, "");
}

function eaTokenSet(text) {
  const stop = new Set(["the","a","an","and","or","of","to","in","for","is","are","be","can","what","how","when","does","do","with","on","as","if","from","by","taxpayer","tax","return","generally","federal"]);
  return new Set(
    eaNormalize(text).toLowerCase().replace(/[^a-z0-9$% -]/g," ").split(/\s+/)
      .filter(w => w.length > 2 && !stop.has(w))
  );
}

function eaSimilarity(a, b) {
  const A = eaTokenSet(a), B = eaTokenSet(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  A.forEach(x => { if (B.has(x)) hit++; });
  return hit / Math.max(A.size, B.size);
}

function eaAnswerKind(answer) {
  const a = eaNormalize(answer);
  if (/^(yes|no)\b/i.test(a)) return "yesno";
  if (/^The greater of\b/i.test(a)) return "greater";
  if (/\$[\d,]+/.test(a)) return "money";
  if (/\b\d+(?:\.\d+)?%\b/.test(a)) return "percent";
  if (/\b(?:Form|Schedule)\s+[A-Z0-9-]+/i.test(a)) return "form";
  if (/\b(?:day|days|month|months|year|years|age)\b/i.test(a) && /\d/.test(a)) return "time";
  if (/^\d[\d,]*(?:\.\d+)?\.?$/.test(a)) return "number";
  if (a.length <= 22) return "short";
  if (a.length <= 85) return "medium";
  return "long";
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
  if (curated) return 8;
  const text = (question + " " + answer).toLowerCase();
  let p = 1.2;
  EA_CORE_KEYWORDS.forEach(k => { if (text.includes(k)) p += 0.6; });
  if (/\b2025\b/i.test(text)) p += 0.4;
  if (/\b(?:form|schedule)\s+[0-9a-z-]+/i.test(text)) p += 0.35;
  return Math.min(6, Math.max(1, p));
}

function eaSourceUsable(card) {
  const q = eaNormalize(card.q);
  const a = eaNormalize(card.a);
  if (q.length < 24 || a.length < 2) return false;
  if (EA_REJECT_PATTERNS.some(re => re.test(q))) return false;
  if (/^(give examples|name examples|list all|repeat|recall)\b/i.test(q)) return false;
  return true;
}

function eaRewriteStem(question, answer, id) {
  let q = eaNormalize(question)
    .replace(/\bfor these rules\b/gi, "for federal income tax purposes")
    .replace(/\bunder the rules discussed\b/gi, "under federal tax rules")
    .replace(/\bunder the rule discussed\b/gi, "under federal tax rules")
    .replace(/\bfor these filing rules\b/gi, "for federal filing purposes");

  let m;

  // Convert common classification prompts into clean standalone stems.
  if ((m = q.match(/^Is (.+?) earned or unearned income\?$/i))) {
    return `How is ${m[1]} generally classified for federal income tax purposes?`;
  }
  if ((m = q.match(/^Are (.+?) earned or unearned income(?: in the year received)?\?$/i))) {
    return `How are ${m[1]} generally classified for federal income tax purposes?`;
  }
  if ((m = q.match(/^How are (.+?) classified for .*?\?$/i)) && /earned income/i.test(answer)) {
    return `How are ${m[1]} generally classified for federal income tax purposes?`;
  }

  // Definitions benefit from a one-best-answer format.
  if ((m = q.match(/^What does (.+?) stand for\?$/i))) {
    return `What does ${m[1]} stand for in federal tax terminology?`;
  }
  if ((m = q.match(/^What does (.+?) mean\?$/i))) {
    return `Which choice best defines ${m[1]} for federal tax purposes?`;
  }
  if ((m = q.match(/^What is (.+?)\?$/i))) {
    const subject = m[1];
    if (!/\b(?:amount|limit|threshold|rate|maximum|minimum|deadline|period|age|percentage|purpose|starting point|result|basis after|taxable amount)\b/i.test(subject)) {
      return `Which choice best describes ${subject} for federal tax purposes?`;
    }
  }

  // Clean up form questions.
  if (/^What form is used to /i.test(q)) {
    return q.replace(/^What form is used to /i, "Which IRS form is generally used to ");
  }
  if (/^What form can be /i.test(q)) {
    return q.replace(/^What form can be /i, "Which IRS form can be ");
  }

  // Preserve already-standalone direct questions. The real SEE uses direct
  // questions as well as incomplete sentences and EXCEPT formats.
  return q;
}

function eaExtractNumber(answer) {
  const m = eaNormalize(answer).match(/\$?([\d,]+(?:\.\d+)?)/);
  return m ? Number(m[1].replace(/,/g, "")) : null;
}

function eaReplaceFirstNumber(original, value) {
  const a = eaNormalize(original);
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Number(value.toFixed(2));
  const formatted = /\$/.test(a)
    ? "$" + Number(rounded).toLocaleString("en-US")
    : String(rounded);
  return a.replace(/\$?[\d,]+(?:\.\d+)?/, formatted);
}

function eaRelatedNumericAnswers(deck, cardIndex, correct, kind) {
  const out = [];
  for (let distance = 1; distance <= 18; distance++) {
    for (const idx of [cardIndex - distance, cardIndex + distance]) {
      if (idx < 0 || idx >= deck.cards.length) continue;
      const a = eaNormalize(deck.cards[idx].a);
      if (!a || a.toLowerCase() === correct.toLowerCase()) continue;
      if (eaAnswerKind(a) === kind) out.push(a);
    }
  }
  return out;
}

function eaNumericDistractors(deck, cardIndex, correct, kind) {
  const out = eaRelatedNumericAnswers(deck, cardIndex, correct, kind);
  const n = eaExtractNumber(correct);
  if (Number.isFinite(n) && n !== 0) {
    const factors = Math.abs(n) >= 1000 ? [0.5, 0.75, 1.25, 1.5] : [0.5, 0.8, 1.2, 1.5];
    factors.forEach(f => out.push(eaReplaceFirstNumber(correct, n * f)));
  }
  return out;
}

function eaGreaterOfDistractors(correct) {
  const clean = eaTrimPeriod(correct);
  const m = clean.match(/^The greater of (.+?) or (.+)$/i);
  if (!m) return [];
  const first = m[1], second = m[2];
  return [
    first + ".",
    second + ".",
    `The lesser of ${first} or ${second}.`
  ];
}

function eaFamilyDistractors(correct) {
  const lc = eaTrimPeriod(correct).toLowerCase();
  for (const family of EA_ANSWER_FAMILIES) {
    const idx = family.findIndex(x => eaTrimPeriod(x).toLowerCase() === lc);
    if (idx >= 0) return family.filter((_,i) => i !== idx);
  }
  return [];
}

function eaYesNoDistractors(correct) {
  const yes = /^yes\b/i.test(correct);
  if (yes) {
    return [
      "No.",
      "No, unless the taxpayer receives advance IRS approval.",
      "Only if the taxpayer itemizes deductions."
    ];
  }
  return [
    "Yes.",
    "Yes, if the taxpayer reports the item on the return.",
    "Yes, but only when the taxpayer itemizes deductions."
  ];
}

function eaNearbyDistractors(deck, cardIndex, card, kind) {
  const candidates = [];
  for (let distance = 1; distance <= 35; distance++) {
    for (const idx of [cardIndex - distance, cardIndex + distance]) {
      if (idx < 0 || idx >= deck.cards.length) continue;
      const other = deck.cards[idx];
      const ans = eaNormalize(other.a);
      if (!ans || ans.toLowerCase() === eaNormalize(card.a).toLowerCase()) continue;
      const sameKind = eaAnswerKind(ans) === kind;
      const sim = eaSimilarity(card.q + " " + card.a, other.q + " " + other.a);
      candidates.push({ans,score:(sameKind?3:0)+(sim*4)-(distance/100)});
    }
  }
  candidates.sort((a,b)=>b.score-a.score);
  return candidates.map(x=>x.ans);
}

function eaBuildChoices(deck, card, cardIndex, rewrittenQ) {
  const correct = eaNormalize(card.a);
  const kind = eaAnswerKind(correct);
  let distractors = [];

  if (kind === "greater") distractors.push(...eaGreaterOfDistractors(correct));
  distractors.push(...eaFamilyDistractors(correct));
  if (kind === "yesno") distractors.push(...eaYesNoDistractors(correct));
  if (["money","percent","number","time"].includes(kind)) {
    distractors.push(...eaNumericDistractors(deck, cardIndex, correct, kind));
  }
  distractors.push(...eaNearbyDistractors(deck, cardIndex, card, kind));

  const unique = [];
  const seen = new Set([correct.toLowerCase()]);
  for (const d of distractors) {
    const clean = eaNormalize(d);
    const key = clean.toLowerCase();
    if (!clean || seen.has(key)) continue;
    if (eaSimilarity(clean, correct) > 0.92) continue;
    // Avoid a distractor that simply restates the entire question.
    if (eaSimilarity(clean, rewrittenQ) > 0.86) continue;
    seen.add(key);
    unique.push(clean);
    if (unique.length === 3) break;
  }

  const fallback = [
    "None of these choices correctly states the federal tax rule.",
    "The treatment depends only on whether the taxpayer itemizes deductions.",
    "The item is disregarded for federal income tax purposes."
  ];
  for (const d of fallback) {
    if (unique.length >= 3) break;
    if (!seen.has(d.toLowerCase())) unique.push(d);
  }

  const raw = [correct, ...unique.slice(0,3)];
  const shuffled = eaSeededShuffle(raw, card.id + "::rewritten-choices");
  return {choices:shuffled,answer:shuffled.indexOf(correct)};
}

function eaConceptKey(q, a) {
  // Conservative duplicate detection: exact normalized idea, not merely the same answer.
  return (eaNormalize(q).toLowerCase().replace(/[^a-z0-9]+/g," ") + "::" +
          eaNormalize(a).toLowerCase().replace(/[^a-z0-9$%]+/g," ")).trim();
}

function eaBuildRewrittenBank() {
  const out = [];
  const seenConcepts = new Set();

  EA_DECKS.forEach((deck, deckIndex) => {
    deck.cards.forEach((card, cardIndex) => {
      if (!eaSourceUsable(card)) return;

      const rewrittenQ = eaRewriteStem(card.q, card.a, card.id);
      const key = eaConceptKey(rewrittenQ, card.a);
      if (seenConcepts.has(key)) return;
      seenConcepts.add(key);

      const made = eaBuildChoices(deck, card, cardIndex, rewrittenQ);
      const domain = eaClassifyDomain(deck, card);

      out.push({
        id: "rw-" + card.id,
        sourceId: card.id,
        source: "rewritten",
        sourceLabel: "Rewritten bank",
        order: domain * 100000 + deckIndex * 10000 + cardIndex,
        domain,
        topic: EA_DOMAIN_NAMES[domain],
        q: rewrittenQ,
        choices: made.choices,
        answer: made.answer,
        explanation: eaNormalize(card.a),
        reference: "EA Part 1 study rule · tax year 2025",
        priority: eaPriority(rewrittenQ, card.a, false),
        examEligible: true
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
    order: q.domain * 100000 + 90000 + index,
    priority: eaPriority(q.q, q.explanation || q.choices[q.answer], true),
    examEligible: true
  }));
}

// Keep the automatic rewriter available for development/comparison, but the
// live study bank now uses only questions that were reviewed individually.
const EA_REWRITTEN_BANK = typeof EA_AUDITED_BANK !== "undefined"
  ? EA_AUDITED_BANK
  : eaBuildRewrittenBank();
const EA_CURATED_BANK = eaBuildCuratedBank();

// Compatibility alias used by existing practice controls.
const EA_DERIVED_BANK = EA_REWRITTEN_BANK;
const EA_FULL_BANK = [...EA_REWRITTEN_BANK, ...EA_CURATED_BANK];

const EA_BANK_STATS = {
  total: EA_FULL_BANK.length,
  rewritten: EA_REWRITTEN_BANK.length,
  curated: EA_CURATED_BANK.length,
  examEligible: EA_FULL_BANK.filter(q => q.examEligible).length,
  sourceCardsReviewed: typeof EA_AUDIT_STATS !== "undefined" ? EA_AUDIT_STATS.sourceCardsReviewed : null
};

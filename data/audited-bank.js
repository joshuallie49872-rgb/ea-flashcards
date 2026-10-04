// Consolidated individually audited question bank.
// Built from audit batches 1-7 after reviewing every source card in the Part 1 decks.
const EA_AUDIT_BATCHES = [
  EA_AUDIT_BATCH_1,
  EA_AUDIT_BATCH_2,
  EA_AUDIT_BATCH_3,
  EA_AUDIT_BATCH_4,
  EA_AUDIT_BATCH_5,
  EA_AUDIT_BATCH_6,
  EA_AUDIT_BATCH_7
];

const EA_AUDITED_BANK = EA_AUDIT_BATCHES.flatMap((batch, batchIndex) =>
  batch.questions.map((q, questionIndex) => ({
    ...q,
    source: "audited",
    sourceLabel: "Individually audited",
    order: q.domain * 100000 + batchIndex * 10000 + questionIndex,
    priority: 2,
    examEligible: true
  }))
);

const EA_AUDIT_STATS = {
  sourceCardsReviewed: EA_AUDIT_BATCHES.reduce((n, b) => n + b.reviewedCount, 0),
  auditedQuestions: EA_AUDITED_BANK.length,
  batches: EA_AUDIT_BATCHES.length
};

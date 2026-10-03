# EA Flashcards

A simple GitHub Pages flashcard app for EA exam study.

## Included
- J and A profiles
- 7 video decks
- Mobile + desktop layout
- Tap/click lecture flashcards for quick recall
- 100 original EA Part 1 A–D practice questions modeled on the current exam blueprint
- Practice mode with immediate answer explanations and source references
- 100-question, 3½-hour timed mock-exam mode with end-of-test review
- Ordered and random modes
- Correct / Wrong tracking
- Cards become mastered after 3 correct answers
- Active / All / Weak / Mastered filters
- Local progress saved in browser localStorage
- Offline cache after the first load

## Important
Progress is saved **per browser/device**. Your phone and desktop do not automatically sync.

## GitHub Pages setup
1. Unzip this folder.
2. Upload the files and folders to the **root** of your `ea-flashcards` repository.
3. Commit the files.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**.
7. Save.

GitHub will show the Pages address after deployment.

## Adding the full decks
Flashcards live in:

`data/decks.js`

Each card looks like:

```js
{ id: "v1-001", q: "Question here?", a: "Answer here." }
```

Video 1 contains the full 608-card deck based on the substantive EA/tax material taught in the 2026 Part 1 Video 1 transcript.

## Current deck counts

- Video 1: 608 cards
- Video 2: 0 cards (intentionally blank)
- Video 3: 512 cards
- Video 4: 449 cards
- Video 5: 350 cards
- Video 6: 199 cards
- Video 7: 320 cards



## Exam-style mode

The lecture decks are kept as a separate recall tool. The new **Practice questions** and **100-question mock exam** modes are designed for exam transfer:

- every question stands on its own when randomized;
- four answer choices (A–D), with one best answer;
- plausible distractors rather than obvious filler;
- short fact patterns where application of a rule matters;
- explanations shown after answering in practice mode;
- mock mode hides answers until the test is finished;
- performance is broken out by the six Part 1 content areas.

The exam bank uses tax year 2025 rules for the 2026–2027 SEE cycle. The questions are original study questions, not copied proprietary course questions or live SEE questions.


## Large A–D question bank

The app now creates a large multiple-choice bank from the existing lecture material in addition to the hand-built exam-style bank.

Current structure:
- 2,438 lecture-derived A–D review questions
- 100 hand-built exam-style A–D questions
- 2,538 total Part 1 questions
- ordered or randomized practice
- filtering by Part 1 content area
- separate 100-question / 3.5-hour mock exam mode

The lecture-derived bank is intended for repetition and recall. Mock exams favor the hand-built questions and higher-priority core tax topics, while still drawing from the larger bank so repeated exams are less predictable.

The real SEE uses scaled scoring. This app reports practice accuracy and should not be interpreted as an IRS scaled score.


## Rewritten Part 1 bank

The large practice bank has been rebuilt from the lecture source material rather than exposing the original flashcards as converted questions.

Current design:
- more than 2,200 rewritten standalone multiple-choice questions derived from useful lecture concepts;
- 100 additional hand-built exam-style questions;
- context-dependent lecture trivia and prompts referring to an example, discussion, slide, chart, speaker, or video are excluded;
- each question has four answer choices and one keyed answer;
- direct questions, definitions, thresholds, calculations, forms, classifications, and rule applications are kept as standalone testable concepts;
- practice can run in order or random;
- the 100-question timed practice exam samples by Part 1 domain and favors higher-priority material.

The bank is original study material. It is not a reproduction of live SEE questions or proprietary paid-course question banks.

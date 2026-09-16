# EA Flashcards

A simple GitHub Pages flashcard app for EA exam study.

## Included
- J and A profiles
- 7 video decks
- Mobile + desktop layout
- Tap/click to flip question and answer
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

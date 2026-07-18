# _CSP

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No Build](https://img.shields.io/badge/build-none-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

A minimal, dark-themed **DuckDuckGo search launcher** with a personal library of reusable **Quick Phrases**. Type a query (or click phrases to build one up), hit Search, and you are handed off to DuckDuckGo. Your phrase list is saved in the browser, so your favorite prompts and search starters stick around between visits.

Pure vanilla HTML, CSS, and JavaScript. No dependencies, no build step, no server.

## Features

### 🔍 Search Launcher
A multi-line text area for composing a query, with a Search button that redirects to `https://duckduckgo.com/?q=...` (query URL-encoded). Empty submissions are rejected with an alert and an error style on the input.

### 💬 Quick Phrases
A side panel of clickable phrases (e.g. "How to learn", "Compare and contrast"). Clicking a phrase appends it to the current query, so you can stack fragments into a full search. Comes seeded with a handful of starter phrases.

### ✏️ Editable & Persistent
A "Modify" button opens a modal to add, edit inline, or delete phrases. Saved changes are written to `localStorage` under the `searchPhrases` key and reloaded automatically on the next visit.

### 🎨 Themed UI
Frosted, semi-transparent dark panels over a full-bleed background image, driven entirely by CSS custom properties. A build-date stamp is rendered in the corner from `version.js`.

## Architecture

```
_CSP/
├── index.html       # Page structure: search panel, phrases panel, edit modal
├── scripts.js       # Phrase rendering, edit modal, localStorage, search redirect
├── styles.css       # Dark theme (CSS variables), layout, modal, loader
├── version.js       # Build-date string shown in the corner
├── logo.svg         # DuckDuckGo logo (vector)
├── logo.png         # DuckDuckGo logo (raster, used in page)
├── background.png   # Full-page background image
└── favicon.png      # Browser tab icon
```

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | HTML5                               |
| Styling    | CSS3 (custom properties)            |
| Logic      | Vanilla JavaScript (ES6)            |
| Storage    | Browser `localStorage`             |
| Search     | DuckDuckGo query redirect           |
| Build      | None - static files served as-is    |

## Getting Started / Local Development

No build tooling required. Clone and open the page.

```bash
git clone https://github.com/osyra42/_CSP.git
cd _CSP
```

Open `index.html` directly in a browser, or serve the folder locally:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Usage

1. Type a search query into the text area.
2. (Optional) Click any **Quick Phrase** to append it to your query.
3. Click **Search** to open the results on DuckDuckGo.
4. Click **Modify** to add, rename, or delete phrases. **Save Changes** persists them to your browser.

## License

MIT

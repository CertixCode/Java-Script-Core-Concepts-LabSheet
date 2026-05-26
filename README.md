# JavaScript Core Concepts LabSheet

A responsive labsheet showcase website for presenting JavaScript questions, answer code, and live outputs in one place. The UI is built with Tailwind CSS and a small custom stylesheet, while the content is rendered dynamically from the functions defined in `answers.js`.

## Overview

This project is designed as a study and presentation page for JavaScript lab questions. Each question card includes:

- The question title and prompt
- A short explanation of the solution approach
- The answer code in a formatted code block
- A live output panel that displays the result returned by the answer function

The page also includes a left-side navigator so users can jump directly to any question.

## Features

- Clean, responsive dashboard-style layout
- Tailwind CSS utility styling via CDN
- Custom visual polish through `styles.css`
- Question navigation sidebar
- Dynamically rendered question cards
- Live output generation from reusable answer functions
- Smooth scrolling and subtle card animations

## Project Structure

```text
index.html   # Main page shell and layout
answers.js   # Question data plus answer functions and output generators
script.js    # Renderer that injects the questions, code, and outputs into the page
styles.css   # Custom styling that complements Tailwind CSS
```

## How It Works

The app is fully client-side and data-driven:

1. `answers.js` defines the reusable JavaScript functions.
2. The same file also exports the labsheet data on `window.labSheetData`.
3. `script.js` reads that data and builds the navigation and question cards.
4. For each question, the output function is executed and its return value is shown in the UI.

This approach keeps the content and presentation separated, which makes the labsheet easier to maintain and expand.

## Getting Started

You do not need a build step or package install for this project.

### Option 1: Open directly in the browser

Open `index.html` in any modern browser.

### Option 2: Use a local server

If you are using VS Code, open the folder and launch a simple local server with an extension such as Live Server. This is optional, but it is a convenient way to reload changes while editing.

## Notes About Dependencies

The page loads Tailwind CSS from the CDN in `index.html`, so an internet connection is required for the Tailwind styles to load unless you replace the CDN with a local setup.

The page also loads the Inter font from Google Fonts for the current design.

## Customization Guide

### Update the questions

Edit `answers.js` and modify the `window.labSheetData` array. Each item supports:

- `id`: used for navigation anchors
- `title`: the card heading
- `question`: the prompt shown to the user
- `explanation`: a short solution summary
- `code`: the answer code displayed on the page
- `output`: a function that returns the live output object/value shown in the UI

### Add a new lab question

Add a new object to `window.labSheetData` and create the associated answer function near the top of `answers.js`. Then update the `code` and `output` fields so the card shows the implementation and its result.

### Change the styling

Use `styles.css` for custom visual adjustments that are easier to manage outside Tailwind utilities. This file currently handles:

- The background treatment
- Card shadows and glass effects
- Code and output panel styling
- Small motion and hover details

## Design Intent

The visual style aims to feel like a modern study dashboard rather than a generic document page. The layout uses:

- Dark layered backgrounds
- Cyan accent highlights
- Rounded glass panels
- Large typography in the hero section
- Strong contrast for code and output blocks

## Browser Support

This project is intended for modern browsers that support:

- ES6+ JavaScript
- Template literals
- `Array.prototype.flat`
- `Set`
- CSS backdrop filters

## Example Output Flow

For each question, the flow is:

1. The question data is read from `window.labSheetData`.
2. The output function runs the related answer logic.
3. The return value is formatted for display.
4. The renderer injects the question card into the page.

## Troubleshooting

- If the page appears unstyled, make sure the device is connected to the internet so the Tailwind CDN and Google Fonts can load.
- If the outputs are missing, check that `answers.js` is loading before `script.js` and that `window.labSheetData` is defined.
- If you add a new question, make sure the `id` value is unique so the sidebar links work correctly.

## Future Improvements

Possible next steps for the project include:

- Adding search or filter support for questions
- Adding copy-to-clipboard buttons for code blocks
- Grouping questions by topic
- Replacing the CDN setup with a local Tailwind build
- Adding a dark/light theme toggle

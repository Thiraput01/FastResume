# Resume Builder Key Features

This document outlines the key features extracted from the existing Svelte codebase before migrating to Next.js.

## 1. Core Data Model
The resume content is managed via a defined schema and initial data exported from `src/data.ts`. The main keys act as the single source of truth for the resume:
- `introData`: Personal information (name, phone, email, github, linkedin, location).
- `technologies`: Array of skills categorized by sections (Languages, Frameworks, Databases, Tools).
- `educations`: Array of educational background elements.
- `experiences`: Array of work experience objects (position, company, date, details, url, github).
- `projects`: Array of projects (name, date, details, url, github).
- `activities`: Array of activities/achievements.

*Mapped Svelte File:* `src/data.ts`

## 2. Resume Builder Flow
The application presents a single-page view showcasing the resume in a "display-mode" or "edit-mode". It provides a WYSIWYG (What You See Is What You Get) interface where users can customize the visibility of elements before printing.

*Mapped Svelte File:* `src/App.svelte`

## 3. Live Editing Features
- **Hide/Show toggle**: Specific tags can be hidden by clicking a `[Hide]` toggle. The application relies on direct DOM manipulation where it finds the `parentNode` of the clicked toggle and pushes a `.web-only` CSS class into it, along with a grayed-out `.text-gray-300` styling.
- **Temporary Code Editor**: Users can edit the raw JSON of their resume and apply the changes dynamically. This feature binds a JSON representation of the data to a `<textarea>` and performs schema validation before deploying it to the app's state.

*Mapped Svelte File:* `src/HideToggle.svelte`, `src/App.svelte`

## 4. PDF Export Pipeline
The PDF rendering pipeline relies heavily on browser native print functionality `window.print()`. 
- **Print Styles**: It manages typography overrides specifically for `@media print`. For example, it utilizes smaller text sizes (`text-[9pt]`, `text-xs`) to optimize space.
- **Web-Only Components**: Any UI related to editing is given a `web-only` class. The print stylesheet uses `:global(.web-only) { display: none; }` to hide the toggle buttons, header, and hidden tags before rendering the exported PDF.
- **Margin overrides**: The application overrides `@page { margin: 10px; }` to optimize the output and fit the content perfectly onto a letter page.

*Mapped Svelte File:* `src/App.svelte`, `src/components/Intro.svelte`, `tailwind.config.cjs`

## 5. State Management Approach
State handling is built on top of Svelte's reactive bindings constraint.
- The `resumeDraft` stores the dynamic state of the user’s resume.
- It parses user inputs from the temporary edit text area, uses `structuredClone` (or JSON stringify/parse fallback) for deep cloning the source data.
- It uses basic Svelte lifecycle triggers (`window.addEventListener('afterprint')`) to restore temporary states effectively once the printing is completed.

*Mapped Svelte File:* `src/App.svelte`

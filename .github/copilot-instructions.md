<!-- .github/copilot-instructions.md: guidance for AI coding agents working on this repo -->
# Copilot instructions — React + Vite (learning)

Purpose: help an AI coding agent be productive in this small React + Vite project.

- Quick start
  - Install and run: `npm install` then `npm run dev` (uses Vite). See [package.json](package.json).
  - Build: `npm run build` and preview: `npm run preview`.
  - Lint: `npm run lint` (project uses the root `eslint.config.js`).

- Big picture
  - This is a single-page React app scaffolded with Vite. Entrypoint is [src/main.jsx](src/main.jsx) which wraps `<App />` with `react-redux` `Provider` and `BrowserRouter`.
  - Routing: [src/App.jsx](src/App.jsx) defines React Router routes — currently `'/'` renders `StudetForms` (file: [src/Task/StudentForms.jsx](src/Task/StudentForms.jsx)).
  - State management: the project uses `@reduxjs/toolkit`. A store is created at [src/Task/Store/Store.js](src/Task/Store/Store.js) but currently has an empty `reducer: {}`. Slices live under [src/Task/Store/Slices/](src/Task/Store/Slices/) (e.g., `FormValues.js` is a placeholder).

- Project-specific conventions and patterns (do not assume defaults)
  - File layout: UI components live in `src/Components/`, page-like components in `src/screens/`, and the student feature under `src/Task/`.
  - Styling: plain `.css` files colocated with components (e.g., `src/Task/StudentForms.css`). Prefer existing CSS files rather than adding new CSS-in-JS.
  - Components use default exports and functional components with React hooks. Respect existing naming: `StudentForms.jsx` exports `StudetForms` (typo) — verify imports before renaming.
  - Redux slices: expected pattern is `createSlice` and export the reducer as default. Register reducers in `Store.js` (see example below).

- Integration points & important files
  - App entry: [src/main.jsx](src/main.jsx)
  - Routes: [src/App.jsx](src/App.jsx)
  - Store bootstrap: [src/Task/Store/Store.js](src/Task/Store/Store.js)
  - Slice templates: [src/Task/Store/Slices/FormValues.js](src/Task/Store/Slices/FormValues.js) (placeholder)
  - Main feature: [src/Task/StudentForms.jsx](src/Task/StudentForms.jsx)
  - Nav: [src/Components/Navbar.jsx](src/Components/Navbar.jsx)

- Example: adding a form slice
  - Create `src/Task/Store/Slices/FormValues.js` with `createSlice` and export its reducer:

```javascript
import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: { list: [] },
  reducers: {
    add(state, action) { state.list.push(action.payload) },
    update(state, action) { /* ... */ },
  }
})

export const { add, update } = formSlice.actions
export default formSlice.reducer
```

  - Register it in [src/Task/Store/Store.js](src/Task/Store/Store.js):

```javascript
import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Slices/FormValues'

export default configureStore({
  reducer: { form: formReducer }
})
```

- Things an AI should look for / avoid changing automatically
  - Do NOT rename `StudetForms` to `StudentForms` without updating all imports; the project currently imports `./Task/StudentForms` from `App.jsx`.
  - The store exists but is not wired to UI — prefer incremental changes (add slice, update store, then switch one component to use the slice).
  - Keep routing changes minimal: add routes in `App.jsx` and add `Link` targets in `Navbar.jsx` as needed.

- Debugging & developer workflow notes
  - Run the dev server: `npm run dev` (fast HMR via Vite). Use the browser console for runtime errors and the terminal for Vite build errors.
  - Lint with `npm run lint`. ESLint rules are at `eslint.config.js`.
  - There are no tests in the repo; validate behavior manually in the browser.

- PR / commit guidance for agents
  - Make focused changes and ensure `npm run dev` runs without errors.
  - If adding a slice, include a small usage example or a unit test (optional) and update `Store.js`.

If any part of the codebase is unclear or you want me to expand examples (e.g., convert `StudentForms` to use Redux), tell me which file or behavior to focus on.

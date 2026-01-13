# Project Context: Portfolio Website

## Project Overview

This is a personal portfolio website for Caio Caminha, built as a modern **Single Page Application (SPA)** using **Next.js 16**. The project showcases skills, experience, and projects with a focus on high performance, accessibility, and a polished user experience.

**Key Features:**
*   **Modern Stack:** Built with Next.js 16 (App Router), React 19, and TypeScript.
*   **Styling:** Utilizes **Tailwind CSS v4** for utility-first styling and **Framer Motion** for smooth, complex animations.
*   **Theming:** Implements a robust Dark/Light mode toggle using `next-themes` and a custom `ThemeProvider`.
*   **Internationalization (i18n):** Features a custom, lightweight i18n system (`LanguageProvider`) supporting English (en) and Portuguese (pt) without page reloads.
*   **Component Architecture:** Clean separation of concerns with atomic design principles in `src/components` (Layout, Sections, UI).

## Architecture & Structure

The project follows the standard Next.js App Router structure within a `src` directory:

*   **`src/app/`**: Application routes and layouts.
    *   `layout.tsx`: Root layout including `ThemeProvider`, `LanguageProvider`, `Navbar`, and `Footer`.
    *   `page.tsx`: The main entry point rendering the SPA sections.
    *   `projects/[slug]/page.tsx`: Dynamic route for detailed project views.
*   **`src/components/`**: Reusable React components.
    *   `layout/`: Structural components like `Navbar` and `Footer`.
    *   `sections/`: Page sections (Hero, About, Experience, Projects, etc.).
    *   `ui/`: Low-level UI primitives (buttons, icons, text parsers).
*   **`src/context/`**: React Context definitions (e.g., `language-context.tsx`).
*   **`src/data/`**: Static data and dictionaries (e.g., `dictionaries.ts` for translations).
*   **`src/hooks/`**: Custom React hooks (e.g., `use-active-section.ts`).
*   **`src/lib/`**: Utility functions (e.g., `utils.ts` for `cn` class merging).

## Building and Running

The project uses `npm` for dependency management and scripts.

*   **Development Server:**
    ```bash
    npm run dev
    ```
    Runs the app on `http://localhost:3000`.

*   **Production Build:**
    ```bash
    npm run build
    npm run start
    ```
    Builds the optimized application and starts the production server.

*   **Linting:**
    ```bash
    npm run lint
    ```
    Runs ESLint to check for code quality issues.

## Development Conventions

*   **Styling:** Use Tailwind CSS utility classes. For complex class logic, use the `cn()` utility (combining `clsx` and `tailwind-merge`).
*   **Animations:** Prefer `framer-motion` for meaningful transitions and interactions.
*   **Rich Text:** Use the custom `RichText` component for rendering text with formatting markers (e.g., `**bold**`, `[[counter]]`).
*   **Data:** Maintain all content in `src/data/dictionaries.ts` to ensure full bilingual support. Update both `en` and `pt` objects when adding new content.
*   **Type Safety:** Strict TypeScript mode is enabled. Define interfaces for props and data structures.

# JSX Development Rules (`rules.md`)

> **Main principle: Keep it simple.** Write the smallest clear solution that correctly solves the task. The codebase should be easy to read, debug, maintain, and extend.

## 1. Simplest Approach First

1. Prefer straightforward JSX, functions, props, and React hooks.
2. Do not over-engineer or introduce patterns without a real need.
3. Reuse existing components, hooks, utilities, styles, and dependencies before creating new ones.
4. Do not create a component, hook, utility, context, provider, folder, or file for a one-time task unless it clearly improves readability or organization.
5. Avoid clever or overly compact code. Readability is more important than fewer lines.
6. Do not optimize prematurely. First make the feature correct and understandable.
7. Make the smallest change that fully satisfies the request.

**Rule of thumb:** If a simple solution is readable, reliable, and maintainable, use it.

## 2. Inspect Before Coding

Before changing anything:

- Read the target component and its related files.
- Inspect the existing folder structure and naming conventions.
- Check `package.json` before adding or changing dependencies.
- Search for existing components, styles, hooks, constants, and utilities that can be reused.
- Understand the current behaviour before modifying it.
- Identify the smallest set of files that need to change.

Never replace working code without a clear reason.

## 3. JSX and Components

- Use functional React components.
- Use `PascalCase` for component names and component files, following the project's convention.
- Give each component one clear responsibility.
- Keep page components focused on arranging sections.
- Extract a component when it is reused or when it makes complex JSX easier to understand.
- Do not create a component for every small `div`, heading, or icon.
- Keep JSX indentation and formatting consistent.
- Use fragments (`<>...</>`) when an extra wrapper element is unnecessary.
- Use semantic HTML such as `header`, `nav`, `main`, `section`, and `footer`.
- Avoid deeply nested JSX; simplify it or extract a meaningful section when needed.
- Use stable keys when rendering lists. Prefer unique IDs over array indexes when items can change order.

## 4. Props and State

- Pass component data through clear, explicit props.
- Keep state in the closest component that needs to manage it.
- Use `useState` for simple local state.
- Do not store values in state when they can be calculated from existing props or state.
- Avoid storing the same information in multiple state variables.
- Use `useEffect` only to synchronize with external systems, such as browser events, subscriptions, or API interactions.
- Do not use `useEffect` for values that can be calculated during render.
- Do not introduce Context, Redux, Zustand, or another state library unless shared state genuinely requires it.
- Avoid passing unrelated props through many component layers.

## 5. Functions and Events

- Use descriptive names such as `handleSubmit`, `handleMenuToggle`, and `formatPrice`.
- Keep functions focused and small.
- Use inline handlers for simple actions; extract named handlers when logic is reused or has multiple steps.
- Do not create unnecessary wrapper functions.
- Do not execute event-handler functions during render.
- Use the correct event and HTML behaviour for forms, buttons, and links.
- Prevent duplicate form submissions when they could create duplicate requests or records.

## 6. Styling

- Follow the styling system already used in the project.
- If the project uses Tailwind CSS, prefer its existing utility classes.
- If it uses CSS Modules or regular CSS, follow that convention.
- Do not introduce or mix styling systems without a clear reason.
- Reuse existing colours, typography, spacing, breakpoints, radii, and shadows.
- Avoid repeating large blocks of styles. Extract shared styling only when there is meaningful reuse.
- Avoid unnecessary arbitrary values and `!important`.
- Keep responsive styling consistent and straightforward.
- Do not add animations or visual effects unless they improve the requested experience.

## 7. Responsive Design and Accessibility

- Check mobile, tablet, and desktop layouts.
- Prefer flexible layouts over fixed widths that cause overflow.
- Use buttons for actions and links for navigation.
- Give form controls accessible labels.
- Add meaningful `alt` text to informative images; use empty alt text for decorative images.
- Keep keyboard focus visible.
- Use semantic elements and a logical heading order.
- Do not rely on colour alone to communicate errors or status.
- Include relevant loading, empty, error, disabled, and focus states.

## 8. APIs, Data, and Forms

- Reuse the existing API client and service layer.
- Do not put API logic in purely presentational components when the project already separates it.
- Never hardcode credentials, tokens, or private API keys.
- Handle loading, success, empty, and error states.
- Validate input on the client for usability and on the server for security.
- Do not invent API endpoints, payload fields, or response shapes. Inspect existing code or ask when details are missing.
- Avoid duplicate API requests.
- Keep mock data separate from production flows.

## 9. React and Next.js

For Next.js projects:

- Follow the existing App Router or Pages Router structure.
- In the App Router, prefer Server Components by default.
- Add `"use client"` only when state, effects, event handlers, or browser APIs are needed.
- Keep client components as small as practical.
- Use `next/link` for internal navigation and `next/image` where appropriate.
- Do not access `window`, `document`, or browser storage during server rendering.
- Never expose secrets through `NEXT_PUBLIC_` environment variables.
- Avoid hydration errors by keeping server output and initial client output consistent.

For regular React projects, follow the existing entry point, routing, and build setup. Do not apply Next.js conventions to a non-Next.js project.

## 10. Files and Folder Structure

- Follow the current project structure; do not reorganize it for a small task.
- Keep related files together.
- Use clear, descriptive file names.
- Do not create a folder for a single file unless it provides useful organization.
- Do not create duplicate components or files with overlapping responsibilities.
- Keep the project root clean.
- Do not create empty folders, placeholder files, or unnecessary barrel/index files.

## 11. Dependencies and Code Quality

- Check installed packages before adding a dependency.
- Do not install a package for a small feature that existing tools can handle.
- Do not update unrelated dependencies.
- Remove unused imports and variables introduced by your changes.
- In TypeScript projects, avoid `any`; define appropriate types.
- Do not hide errors using `@ts-ignore`, disabled lint rules, or empty `catch` blocks.
- Do not leave debug logs, temporary code, or commented-out old implementations.
- Add comments only when they explain a non-obvious reason.

## 12. Avoid Unnecessary Refactoring

- Do not change unrelated components, pages, styles, routes, or business logic.
- Do not rename or delete files unless required.
- Do not redesign an entire page when asked to change one section.
- Do not replace existing libraries or patterns just because another option exists.
- Preserve existing behaviour unless the user requests a behaviour change.
- If a larger refactor is necessary, explain why and identify the affected files before proceeding.

## 13. Antigravity Workflow

### Before coding
1. Read this `rules.md`.
2. Inspect the relevant implementation and project conventions.
3. Find what can be reused.
4. Decide which files actually need changes.

### While coding
1. Use the simplest maintainable solution.
2. Reuse existing components, styles, and utilities.
3. Avoid unnecessary files, dependencies, and abstractions.
4. Do not change unrelated functionality.
5. Ask before making a risky assumption when an important requirement is unclear.

### After coding
1. Review every changed file.
2. Check imports, props, event handlers, routes, and asset paths.
3. Run relevant lint, type-check, tests, or build scripts when available.
4. Fix issues introduced by the changes.
5. Report files created, modified, or deleted.
6. State which checks were actually run. Never claim a check passed unless it was run.

## 14. Definition of Done

A task is complete when:

- The requested feature works as intended.
- The implementation is simple, readable, and consistent with the project.
- Existing functionality has not been unintentionally broken.
- No unnecessary files, components, dependencies, or abstractions were added.
- Responsive behaviour and basic accessibility are considered.
- Relevant checks have been run, or their status is clearly explained.

## Final Instruction

**Keep it simple. Reuse before creating. Change only what is necessary. Prefer clear, maintainable JSX over complex or clever code.**

Priority: Explicit user requirements → existing project architecture and conventions → this `rules.md` → personal coding preference.

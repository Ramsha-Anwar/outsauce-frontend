<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->
- [x] Verify that the copilot-instructions.md file in the .github directory is created.

- [x] Clarify Project Requirements
	<!-- Project requirements clarified: Next.js 14+ with TypeScript, App Router, Tailwind CSS for Outsauce AI Lead Generation Software -->

- [ ] Scaffold the Project
	<!--
	Ensure that the previous step has been marked as completed.
	Call project setup tool with projectType parameter.
	Run scaffolding command to create project files and folders.
	Use '.' as the working directory.
	If no appropriate projectType is available, search documentation using available tools.
	Otherwise, create the project structure manually using available file creation tools.
	-->

- [ ] Customize the Project
	<!--
	Verify that all previous steps have been completed successfully and you have marked the step as completed.
	Develop a plan to modify codebase according to user requirements.
	Apply modifications using appropriate tools and user-provided references.
	<!-- Workspace-specific instructions for AI coding agents -->

	# Quick workspace summary

	- **Stack:** Next.js (v16), React, TypeScript, Tailwind CSS.
	- **Router:** App Router layout under `app/` (use `app/layout.tsx`, `app/globals.css`).
	- **UI pieces:** Presentational controls live in `components/ui/`; layout components in `components/layout/` (e.g. `DashboardLayout.tsx`, `Navbar.tsx`, `Sidebar.tsx`).
	- **Helpers:** input rules and small utils in `lib/` (notably `lib/validators.ts`).

	# What to know before editing

	- Pages under `app/` use the App Router. Files that call React hooks or use local state are client components — they include `"use client"` at the top (see `app/auth/login/page.tsx`).
	- Use `next/link` for navigation inside the app (most code uses `Link` from `next/link`).
	- Toasts and ephemeral UI state are centralized with `components/ui/ToastProvider.tsx` and consumed with `useToast()`.
	- Keep styling and tokens in Tailwind; global styles are in `app/globals.css` and Tailwind config is `tailwind.config.js`.

	# Common patterns & examples

	- Controlled inputs: follow the existing pattern using updater function and object spread:
	  - Example: `setValues(v => ({ ...v, email: e.target.value }))` (see `app/auth/login/page.tsx`).
	- Small reusable UI components live in `components/ui/` (e.g. `Button.tsx`, `Card.tsx`, `Modal.tsx`, `Table.tsx`). Prefer using these rather than creating ad-hoc markup.
	- Layout components are composed in `components/layout/` and consumed by pages; respect the layout contract (props/children) when modifying.

	# Build, run & lint

	- Install deps and run locally:
	  - `npm install`
	  - `npm run dev` (development server)
	  - `npm run build` then `npm run start` (production build + serve)
	  - `npm run lint` (ESLint checks)

	# Files to inspect when making changes

	- `package.json` — scripts & dependency versions (Next 16, React 18)
	- `tsconfig.json` — TypeScript options
	- `tailwind.config.js` and `postcss.config.js` — styling setup
	- `app/layout.tsx`, `app/globals.css` — global layout and styles
	- `components/ui/*` and `components/layout/*` — where to add or reuse UI pieces
	- `lib/validators.ts` — input validation examples

	# Integration notes & gotchas

	- There is no centralized API client in this repo — auth pages show local validation and toast flows but do not call a backend. Confirm API endpoints and env variable names before wiring network requests.
	- Prefer adding data fetching to server components or route handlers where possible; keep client components minimal and only client when they require hooks/state.
	- Avoid changing Next.js config or build scripts unless you confirm required changes with the maintainer.

	# When to ask the user

	- Confirm API routes and environment variables before implementing real auth or data persistence.
	- Ask whether to add unit/integration tests and which test framework to use (none present by default).

	# Quick edit checklist for PRs

	- Run `npm run dev` and confirm the changed pages render.
	- Run `npm run lint` and fix lint errors.
	- Keep changes scoped to `components/*`, `app/*`, or `lib/*` unless changing build config.

	If anything here is unclear or you'd like more detail (CI, environment variable names, or a migration guide), tell me and I'll expand this file.
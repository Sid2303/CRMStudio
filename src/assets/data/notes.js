const notes = [
	// Employee 1: Sarah Johnson
	{ 	id: 1,
		employeeId: 1, 
		title: "1: One-on-one recap", 
		note: "Discussed current sprint progress, blockers with CRM validation, and agreed on next steps for contact form implementation.", 
		date: "22-09-2025", 
		modified: "22-09-2025", 
		selected: false 
	},
	{ id: 2, employeeId: 1, title: "2: Weekly goals", note: "Complete CRM validation fixes, polish KPI cards, and review code for accessibility improvements.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 3, employeeId: 1, title: "3: Project insight", note: "Found redundant API calls in CRM form submit; propose debouncing and server-side validation consolidation.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 4, employeeId: 1, title: "4: Learning log", note: "Explored FormData APIs and constraint validation; documented patterns for reuse across forms.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 5, employeeId: 1, title: "5: Retrospective", note: "What went well: collaboration with design; To improve: earlier QA handoff; Action: start PRs sooner.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 2: Michael Smith
	{ id: 6, employeeId: 2, title: "1: Stakeholder sync", note: "Aligned on Q4 roadmap; trimmed scope of dashboard revamp to prioritize reliability and insights.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 7, employeeId: 2, title: "2: Weekly goals", note: "Clarify acceptance criteria for analytics cards, review incidents, finalize rollout plan for infra.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 8, employeeId: 2, title: "3: Risk register", note: "Identified dependency on third‑party auth rate limits; mitigation plan drafted with infra team.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 9, employeeId: 2, title: "4: Feedback notes", note: "Team requests fewer ad‑hoc changes mid‑sprint; will enforce cutoffs and improve grooming quality.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 10, employeeId: 2, title: "5: Retro highlights", note: "Wins: on-time delivery; Needs work: cross-team handoffs; Action: shared definition of done doc.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 3: Emily Davis
	{ id: 11, employeeId: 3, title: "1: UI polish list", note: "Tighten spacing on dashboards, unify button sizes, update empty states with illustrations.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 12, employeeId: 3, title: "2: Accessibility review", note: "Color contrast passes WCAG AA; needs focus outlines and better aria‑labels on modals.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 13, employeeId: 3, title: "3: Design tokens", note: "Drafted tokens for colors/typography/spacing; propose migration plan over two sprints.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 14, employeeId: 3, title: "4: Usability notes", note: "Users struggle to find export; move into top bar and add quick tooltip guide on first use.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 15, employeeId: 3, title: "5: Design QA", note: "Checked spacing scale across 10 key screens; logged minor inconsistencies for dev fixup.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 4: James Wilson
	{ id: 16, employeeId: 4, title: "1: Frontend refactor", note: "Split large components, extracted hooks, reduced re‑renders with memoization where safe.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 17, employeeId: 4, title: "2: Testing plan", note: "Add Cypress coverage for auth flows and nav; Jest tests for utils and reducers next sprint.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 18, employeeId: 4, title: "3: Perf findings", note: "Largest contentful paint improved by 28% after lazy‑loading charts and compressing images.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 19, employeeId: 4, title: "4: Bug triage", note: "Fixed navbar collapse on resize, addressed modal scroll lock issues, resolved tooltip clipping.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 20, employeeId: 4, title: "5: Retro", note: "Keep: pairing; Stop: late Friday merges; Start: PR templates with checklist items for QA.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 5: Sophia Martinez
	{ id: 21, employeeId: 5, title: "1: Data cleanup", note: "Removed outliers, filled missing values, documented feature engineering assumptions.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 22, employeeId: 5, title: "2: Baseline model", note: "Trained baseline with stratified split; tracking metrics in notebook with clear annotations.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 23, employeeId: 5, title: "3: Charts to add", note: "ROC, PR curve, and feature importance; export static images for report inclusion.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 24, employeeId: 5, title: "4: Review feedback", note: "Adjust threshold for recall, improve class imbalance handling, and document limitations.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 25, employeeId: 5, title: "5: Next steps", note: "Prototype gradient boosting, compare against baseline, and start drafting the findings section.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 6: Daniel Anderson
	{ id: 26, employeeId: 6, title: "1: API hardening", note: "Added centralized error handler, standardized error codes, improved observability hooks.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 27, employeeId: 6, title: "2: CI/CD cache", note: "Tweaked caching layers for faster builds, reduced pipeline time by ~35% on main branch.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 28, employeeId: 6, title: "3: Secrets rotation", note: "Rotated tokens, updated env references, and verified zero downtime during deployment.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 29, employeeId: 6, title: "4: Doc update", note: "Refreshed service READMEs, added runbooks and troubleshooting steps for common failures.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 30, employeeId: 6, title: "5: Retro notes", note: "Wins: fewer flaky builds; Improve: PR queueing; Action: auto-merge for green dependabot PRs.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 7: Olivia Brown
	{ id: 31, employeeId: 7, title: "1: Data quality", note: "Outlined checks for missingness, drift, and schema evolution; assigned owners for alerts.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 32, employeeId: 7, title: "2: Policy review", note: "HR leave policy edits approved; communicated rollout timeline and FAQs to managers.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 33, employeeId: 7, title: "3: Brand copy", note: "Reviewed taglines and product messaging; aligned tone of voice with new guidelines.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 34, employeeId: 7, title: "4: 1:1 schedule", note: "Set up monthly 1:1s with direct reports; added topics around growth and feedback loops.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 35, employeeId: 7, title: "5: Quarterly review", note: "Prepared talking points for Q3 performance review and key wins across departments.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 8: Ethan Lee
	{ id: 36, employeeId: 8, title: "1: Terraform updates", note: "Upgraded modules, validated plan/apply in staging, documented breaking changes and fixes.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 37, employeeId: 8, title: "2: CI stability", note: "Stabilized test matrix, parallelized jobs, added retry on network‑bound steps to reduce flakes.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 38, employeeId: 8, title: "3: Registry cleanup", note: "Cleaned legacy images, set retention policies, saved storage and sped up pulls for deploys.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 39, employeeId: 8, title: "4: Dotfiles sync", note: "Synchronized shell/config across machines; standardized tools for faster onboarding.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 40, employeeId: 8, title: "5: Cert prep", note: "Reviewed cloud security topics and networking fundamentals for certification practice.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 9: Ava Thompson
	{ id: 41, employeeId: 9, title: "1: Campaign calendar", note: "Drafted social calendar for Q4 with themes, assets, and collaboration with design team.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 42, employeeId: 9, title: "2: Content plan", note: "Outlined blog topics, set deadlines, and assigned writers; sync with product for accuracy.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 43, employeeId: 9, title: "3: Asset handoff", note: "Coordinated brand assets delivery to partners; created checklist for future collaborations.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 44, employeeId: 9, title: "4: Blog draft", note: "Prepared first draft on design systems; pending review and edits early next week.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 45, employeeId: 9, title: "5: Inspiration", note: "Collected references and moodboards for next campaign’s visuals and messaging cues.", date: "22-09-2025", modified: "22-09-2025", selected: false },

	// Employee 10: William Garcia
	{ id: 46, employeeId: 10, title: "1: Nightly runs", note: "Set up nightly QA runs, collected coverage, and triaged flaky tests for follow‑up.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 47, employeeId: 10, title: "2: Flake triage", note: "Investigated timing issues and race conditions; recorded repro steps and patches in backlog.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 48, employeeId: 10, title: "3: Reports", note: "Generated coverage and failure trend reports; shared summary with managers for decisions.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 49, employeeId: 10, title: "4: Env cleanup", note: "Cleaned test environments and removed stale data; automated cleanup for future cycles.", date: "22-09-2025", modified: "22-09-2025", selected: false },
	{ id: 50, employeeId: 10, title: "5: Release notes", note: "Reviewed release notes and highlighted areas that need extra QA attention post‑deploy.", date: "22-09-2025", modified: "22-09-2025", selected: false },
];

export default notes;
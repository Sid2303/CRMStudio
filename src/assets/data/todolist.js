const todosList = [
	// Employee 1: Sarah Johnson
	{
		id: 1,
		projectId: 1,
		title: "CRM: Implement contact form",
		description: "Project todo for Sarah.",
		priority: "High",
		status: "not-started",
		createdOn: "2025-09-18",
		deadline: "2025-12-31 17:00",
		startDate: "2025-09-18",
		assignedTo: 1,
		assignedFrom: 2,
		notes: "Assigned by Michael.",
		selected: false,
	},
	{
		id: 2,
		projectId: 2,
		title: "Dashboard: KPI cards polish",
		description: "Project todo for Sarah.",
		priority: "Medium",
		status: "in-progress",
		createdOn: "2025-09-18",
		deadline: "2025-12-31 17:00",
		startDate: "2025-09-18",
		assignedTo: 1,
		assignedFrom: 2,
		notes: "Assigned by Michael.",
		selected: false,
	},
	{
		id: 3,
		projectId: 1,
		title: "CRM: Fix validation errors",
		description: "Project todo for Sarah.",
		priority: "Low",
		status: "completed",
		createdOn: "2025-09-18",
		deadline: "2025-12-31 17:00",
		startDate: "2025-09-18",
		assignedTo: 1,
		assignedFrom: 2,
		notes: "Assigned by Michael.",
		selected: false,
	},
	{
		id: 4,
		projectId: 0,
		title: "Personal: Inbox zero",
		description: "Self-assigned personal todo.",
		priority: "Medium",
		status: "not-started",
		createdOn: "2025-09-18",
		deadline: "2025-12-31 17:00",
		startDate: "2025-09-18",
		assignedTo: 1,
		assignedFrom: 1,
		notes: "Personal cleanup.",
		selected: false,
	},
	{
		id: 5,
		projectId: 0,
		title: "Personal: Update portfolio",
		description: "Self-assigned personal todo.",
		priority: "Low",
		status: "completed",
		createdOn: "2025-09-18",
		deadline: "2025-12-31 17:00",
		startDate: "2025-09-18",
		assignedTo: 1,
		assignedFrom: 1,
		notes: "Website tweaks.",
		selected: false,
	},

	// Employee 2: Michael Smith (manager)
	{ id: 6, projectId: 1, title: "CRM: Define sprint scope", description: "Project todo for Michael.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 2, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 7, projectId: 2, title: "Dashboard: Review metrics", description: "Project todo for Michael.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 2, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 8, projectId: 5, title: "Infra: Approve rollout plan", description: "Project todo for Michael.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 2, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 9, projectId: 0, title: "Personal: Weekly planning", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 2, assignedFrom: 2, notes: "Schedule review.", selected: false },
	{ id: 10, projectId: 0, title: "Personal: Read product docs", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 2, assignedFrom: 2, notes: "Docs refresh.", selected: false },

	// Employee 3: Emily Davis
	{ id: 11, projectId: 2, title: "Dashboard: Update typography", description: "Project todo for Emily.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 3, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 12, projectId: 2, title: "Dashboard: Add empty states", description: "Project todo for Emily.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 3, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 13, projectId: 2, title: "Dashboard: Interaction polish", description: "Project todo for Emily.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 3, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 14, projectId: 0, title: "Personal: Figma cleanup", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 3, assignedFrom: 3, notes: "Organize files.", selected: false },
	{ id: 15, projectId: 0, title: "Personal: UX reading", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 3, assignedFrom: 3, notes: "Article backlog.", selected: false },

	// Employee 4: James Wilson
	{ id: 16, projectId: 1, title: "CRM: Fix navbar", description: "Project todo for James.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 4, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 17, projectId: 7, title: "QA: Add Cypress tests", description: "Project todo for James.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 4, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 18, projectId: 1, title: "CRM: Refactor modals", description: "Project todo for James.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 4, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 19, projectId: 0, title: "Personal: Learn TS", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 4, assignedFrom: 4, notes: "Typescript basics.", selected: false },
	{ id: 20, projectId: 0, title: "Personal: Keyboard setup", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 4, assignedFrom: 4, notes: "Keymap tweaks.", selected: false },

	// Employee 5: Sophia Martinez
	{ id: 21, projectId: 3, title: "Analytics: Data cleaning script", description: "Project todo for Sophia.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 5, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 22, projectId: 3, title: "Analytics: Model baseline", description: "Project todo for Sophia.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 5, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 23, projectId: 3, title: "Analytics: Report charts", description: "Project todo for Sophia.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 5, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 24, projectId: 0, title: "Personal: Kaggle practice", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 5, assignedFrom: 5, notes: "Competition warmup.", selected: false },
	{ id: 25, projectId: 0, title: "Personal: Refactor notebooks", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 5, assignedFrom: 5, notes: "Cleanup.", selected: false },

	// Employee 6: Daniel Anderson
	{ id: 26, projectId: 1, title: "CRM: API error handling", description: "Project todo for Daniel.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 6, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 27, projectId: 5, title: "Infra: Improve CI cache", description: "Project todo for Daniel.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 6, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 28, projectId: 5, title: "Infra: Secrets rotation", description: "Project todo for Daniel.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 6, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 29, projectId: 0, title: "Personal: Read Node docs", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 6, assignedFrom: 6, notes: "Streams & buffers.", selected: false },
	{ id: 30, projectId: 0, title: "Personal: Tidy repo", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 6, assignedFrom: 6, notes: "Cleanup branches.", selected: false },

	// Employee 7: Olivia Brown (manager)
	{ id: 31, projectId: 3, title: "Analytics: Review data quality", description: "Project todo for Olivia.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 7, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 32, projectId: 4, title: "HR: Approve leave policy", description: "Project todo for Olivia.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 7, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 33, projectId: 6, title: "Brand: Review copy", description: "Project todo for Olivia.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 7, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 34, projectId: 0, title: "Personal: Team 1:1s", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 7, assignedFrom: 7, notes: "Schedule sessions.", selected: false },
	{ id: 35, projectId: 0, title: "Personal: Inbox cleanup", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 7, assignedFrom: 7, notes: "Triage.", selected: false },

	// Employee 8: Ethan Lee
	{ id: 36, projectId: 5, title: "Infra: Update Terraform", description: "Project todo for Ethan.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 8, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 37, projectId: 7, title: "QA: Stabilize CI jobs", description: "Project todo for Ethan.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 8, assignedFrom: 10, notes: "Assigned by Admin.", selected: false },
	{ id: 38, projectId: 5, title: "Infra: Container registry cleanup", description: "Project todo for Ethan.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 8, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 39, projectId: 0, title: "Personal: Dotfiles sync", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 8, assignedFrom: 8, notes: "Mac & Windows.", selected: false },
	{ id: 40, projectId: 0, title: "Personal: Cloud cert practice", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 8, assignedFrom: 8, notes: "AWS practice.", selected: false },

	// Employee 9: Ava Thompson
	{ id: 41, projectId: 4, title: "HR: Campaign calendar", description: "Project todo for Ava.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 9, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 42, projectId: 6, title: "Brand: Social posts", description: "Project todo for Ava.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 9, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 43, projectId: 6, title: "Brand: Asset handoff", description: "Project todo for Ava.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 9, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 44, projectId: 0, title: "Personal: Blog draft", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 9, assignedFrom: 9, notes: "Q4 draft.", selected: false },
	{ id: 45, projectId: 0, title: "Personal: Design inspiration", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 9, assignedFrom: 9, notes: "Moodboard.", selected: false },

	// Employee 10: William Garcia (Admin)
	{ id: 46, projectId: 7, title: "QA: Set up nightly run", description: "Project todo for William.", priority: "High", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 10, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 47, projectId: 7, title: "QA: Flaky tests triage", description: "Project todo for William.", priority: "Medium", status: "in-progress", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 10, assignedFrom: 7, notes: "Assigned by Olivia.", selected: false },
	{ id: 48, projectId: 7, title: "QA: Coverage report", description: "Project todo for William.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 10, assignedFrom: 2, notes: "Assigned by Michael.", selected: false },
	{ id: 49, projectId: 0, title: "Personal: Test env cleanup", description: "Self-assigned personal todo.", priority: "Medium", status: "not-started", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 10, assignedFrom: 10, notes: "Purge old runs.", selected: false },
	{ id: 50, projectId: 0, title: "Personal: Read release notes", description: "Self-assigned personal todo.", priority: "Low", status: "completed", createdOn: "2025-09-18", deadline: "2025-12-31 17:00", startDate: "2025-09-18", assignedTo: 10, assignedFrom: 10, notes: "vNext notes.", selected: false },
];

export default todosList;
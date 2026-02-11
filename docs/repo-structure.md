# Repo OLAF Structure

## Overall Structure

The `.haal/` folder is an aspirational target. It reflects the main request that emerged from enterprises in the French GenAI "DO TANK": a single, shared, vendor-neutral location for AI artifacts (skills, agents, commands, hooks, and plugins).

We propose this structure to reduce duplication and make it easier for enterprises to adopt multiple agentic solutions on the same repository.

Currently, this structure is not yet widely adopted, and its implementation may vary depending on the specific needs and constraints of each organization. Our intent is to provide a clear direction for the future development of OLAF repositories, and we encourage feedback and contributions to help shape this vision.

```
.haal/
├── skills/
│   ├── skill-1/
│   ├── skill-2/
│   └── skill-3/
├── agents/
│   ├── agent-1/
│   ├── agent-2/
│   └── agent-3/
├── commands/
│   ├── command-1/
│   ├── command-2/
│   └── command-3/
├── hooks/
│   ├── hook-1/
│   ├── hook-2/
│   └── hook-3/
└── plugins/
    ├── plugin-1/
    ├── plugin-2/
    └── plugin-3/

.olaf/
├── works/
├── data/
│   ├── practices/
│   ├── kb/
│   ├── products/
│   ├── projects/ (optional)
│   └── people/ (optional)

## works/
Contains all temporary work and results from skills or other agents that users must review before moving to the correct repository location or deleting.

- Skills, parallel agents, or subagents must create work results (e.g., code review, new document) in this folder.
- Users must review, correct, delete, or improve results before moving them to their destination folders in the repository.

**Important note**: We recommend adding this folder to .gitignore or excluding it (e.g., .git/info/exclude).

## data/practices
Contains all practices shared across all agents and skills.

- These include coding guidelines, review guidelines, Git guidelines, and writing guidelines that apply to the current repository or set of repositories.
- Reference these files in SKILL.md files of skills.

**Important note**: Organizations or teams decide naming conventions, as existing conventions may already be in place.

## data/kb
Contains a shared knowledge base for the repository or organization.

Use this folder for reference material that multiple skills and agents may need (for example, writing guidelines, domain terminology, design standards, or reusable prompts).

Skills and agents may reference files in this folder directly, or include them from skill-local `kb/` folders.

## data/products
Contains all .md files describing the solution handled by the repository.
Structure can include main solution, modules, submodules, depending on repository size and solution complexity.
Skills and agents reference these files for specification, impact analysis, etc.
Skills create most of these files in small repositories, while coded or script agents create them in large repositories.
We strongly recommend agreeing on naming conventions and structure for these files at the organization level to simplify skill creation and sharing.

**Important note**: Many companies have existing well-documented architecture, use cases, flows, etc.

## data/projects (optional)
Contains all files describing project-related events, jobs, and reports.

**Important note**: Enterprises use external tools (e.g., Jira, Excel, custom tools and databases) to manage such artifacts, so this is optional and presented as a potential extension for small enterprises or teams practicing everything-as-code.

## data/people (optional)
Contains data about people participating in solution development and maintenance.
The goal helps newcomers find the best knowledge sources in existing large teams.

**Important note**: This addresses a common request from newcomers that this structure and content can easily serve.

## AI artifacts
See [ai-structure.md](ai-structure.md)
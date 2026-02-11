# AI Structure

## Introduction

The goal of this structure is to avoid or greatly minimize the complexity for enterprises and users to use multiple agentic tools on the same repository.

As of January 2026, each vendor promotes and supports its own structure without providing any common standard.
This makes it difficult for enterprises and expensive when switching from one tool to another, as many repositories need modification to fit the new tool structure.

New specifications such as SKILLS or AGENTS.MD have appeared and will continue to appear (e.g., AWS POWERS.md) without providing any common structure.

## Proposal
We propose a single .olaf folder that all tools can read from and write to, and that can also be used in registries.

This approach simplifies .gitignore files and installation significantly.

## Structure
The current set of artifacts we identified includes:

- skills
- agents
- commands
- hooks
- plugins (optional)
- rules (optional)
- mcp (optional)
- registries (optional)

This structure can extend to include new artifacts as they appear.

### Easy for vendors and enterprises to implement

#### skills
This folder contains all skills.

As of January 2026, skills are scattered in various folders such as .windsurf/skills, .claude/skills, .github/skills, etc.

#### agents
This folder contains all agent definitions. 

As of January 2026, agents are scattered in various folders such as .claude/agents, .github/agents, etc.

#### commands
This folder contains all command definitions. 

As of January 2026, commands are scattered in various folders such as .windsurf/workflows, .github/prompts, etc.

### Complex for vendors and enterprises to implement
For the following sections, we need to align on hook purposes, formats, exit behaviors, and the various hook types that all vendors should support.

#### hooks
This folder contains all hook definitions. 

As of January 2026, hooks are scattered in various folders and in multiple formats from JSON to Markdown.

**Important note**: Hooks represent one of the least aligned solutions between vendors, although they support important use cases for orchestration, security, and on-demand quality checking.

### Existing solutions with potential issues

#### Rules
Rules or instructions are mostly guidance files. 

We need the ability to gather them all in one central folder and apply them only to specific patterns (e.g., modules, file types being edited, intended actions).

Currently, the desired solution applies AGENTS.md and places those files in the covered folders.
However, when AGENTS.md files are located deep in a repository, users tend to forget to maintain them. This approach also makes sharing with other teams or repositories difficult.

#### MCP
This folder contains all MCP definitions. 

As of January 2026, all solutions support mcp.json files, but they are mostly scattered depending on the vendor's choice.

We should focus on the tool granularity. We want to control which tools are enabled, recommended, or mandatory.

Most tools can control this in various ways, and we should align on a common format.

The ability to define which tool sets are enabled for each MCP server and in which cases, or to create toolset definition profiles that can be referenced in SKILLS/Agents, could provide better governance for teams and organizations.

#### registries
This folder contains all registry definitions. 

As of January 2026, only Claude Code has the concept of a marketplace defined and allows adding more.

We want a solution where enterprises can define their internal and external registries for all the artifacts they want their users to access.


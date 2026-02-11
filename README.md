# Open Lightweight Assistant Framework Recommendations

This repository provides recommendations for agents, users, and suppliers.

The goal is to make it easier to use, contribute to, develop, and deliver agent solutions.

This is based on work done in the French GenAI 'DO TANK'.

## Rationale
- Most enterprises use multiple agent solutions simultaneously (IDE, CLI, or coded agents)
- Due to disparate structure, naming conventions, and delivery methods from vendors, we must duplicate many files and sometimes code
- This makes maintenance and training costly, slowing adoption
- No enterprise wants vendor lock-in as innovation comes from all vendors, enterprises, and individual contributors
- By sharing common conventions and structure, we aim to protect investment for all (vendors, customers, and users)
- This proposal describes enterprise and user needs without enforcing a specific solution. It guides vendors and enterprises toward a shared structure and common conventions.

## Proposal

Agents use multiple artifacts to assist users in their tasks.
Enterprises must have a defined structure to simplify artifact delivery.

## Documentation

### Introduction and Background
- **[History and Legitimacy](docs/history-and-legitimacy.md)** - Background and rationale for the OLAF framework

### Foundation and Structure
- **[Common Conventions](docs/common-coventions.md)** - File naming and general conventions across the framework
- **[Repo Structure](docs/repo-structure.md)** - Complete repository structure with .olaf and .haal folder organization
- **[AI Structure](docs/ai-structure.md)** - AI-specific folder structure and artifact organization

### Implementation Guidelines
- **[Essential Skills](docs/essential-skills.md)** - Core skills that should always be provided in OLAF implementations
- **[Skills Convention](docs/skills-coventions.md)** - Naming conventions, folder structure, and best practices for skills
- **[Common Practices](docs/common-practices.md)** - Context management and operational best practices

### Distribution and Management
- **[Registries](docs/registries.md)** - Registry structure and artifact management
- **[Installer](docs/installer.md)** - Common installer requirements and specifications

### Included in this proposal

- Registries and local agent artifact structure
- SKILLS convention, format, and delivery
- AGENTS.MD organization
- Common SKILLS for all agents
- Common practices for all enterprises and their users
- Artifact installer and updater

### In scope but not proposed yet
- SubAgents
- Hooks
  

### Identified but not in scope
- POWERS
- Codemaps


## Current state of the proposal
As of February 2026, this is a draft proposal looking for feedback.

## Next steps
- The proposal will be discussed within the French GenAI community organized by the 'DO TANK' representing over 80 enterprises from very large to small
- It is publicly shared on GitHub to inspire other communities and vendors
- If it reaches sufficient consensus and adoption, it will become a proposed standard



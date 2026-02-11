# Registries

Registries store AI artifacts that users and enterprises can download, install, uninstall, copy, and version.

This document defines a common structure and naming conventions for registries so vendors and enterprises can build installers and tooling that work across multiple agentic solutions.

## Scope and terminology

- An **artifact** is a packaged unit such as a skill, agent definition, command, hook, or plugin.
- A **registry** is a distribution source for artifacts (internal or external).
- A **local repository structure** is how a project stores artifacts in its own source control.

## Relationship to the OLAF repository structure

OLAF defines a split repository layout: `.haal/` is the canonical root for AI artifacts, while `.olaf/` contains shared non-AI artifacts such as `works/` and `data/`.
Registries should mirror the artifact organization used in the repository structure, so installers can map remote artifacts to local destinations.

Example local repository structure:

```
.haal/
├── skills/
├── agents/
├── commands/
├── hooks/
└── plugins/

.olaf/
├── works/
└── data/
```

Example registry structure (distribution layout):

```
.haal/
├── skills/
│   └── create-skill/
│       ├── SKILL.md
│       └── templates/
├── agents/
├── commands/
├── hooks/
├── plugins/
└── registries.json
```

## Registry configuration (`registries.json`)

`registries.json` defines a list of registries that an installer can use as sources for artifacts.

### Primary and secondary registries

- The registry where the `registries.json` file is located is the **primary** registry.
- The file may also list **secondary** registries to use as additional sources.

### Installation order and overrides

The reference shell/PowerShell installer installs registries so that the primary registry wins conflicts.
To achieve this, installers should install secondary registries first, then install the primary registry last.

1. Install artifacts from the last secondary registry.
2. Continue installing toward the first secondary registry.
3. Install artifacts from the primary registry last.

This order ensures that when two registries contain artifacts with the same name, the artifact from the primary registry overrides the one from secondary registries.

### Registry entries

Each registry entry should include enough information to locate and trust the source.
Recommended fields:

- `name`
- `url`
- `ref` (optional: branch, tag, or version identifier)
- `checksum` (optional: integrity)
- `priority` (optional: explicit ordering if needed)

## Naming and versioning conventions

- Use **kebab-case** for artifact folder names.
- Use **semantic versioning** for artifact releases when possible.
- Keep artifact identity stable. If behavior changes significantly, prefer a version bump over renaming.

## Installer expectations

Installers should be able to:

- Install artifacts from one or multiple registries into the local `.haal/` structure.
- Resolve and enforce artifact versions.
- Support enterprise policy (allowed registries, required artifacts, pinned versions).
- Roll back to a previous version when needed.
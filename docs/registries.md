# Registries

Registries store AI artifacts that users and enterprises can download, install, uninstall, copy, and version.

This document defines a common structure and naming conventions for registries so vendors and enterprises can build installers and tooling that work across multiple agentic solutions.

## Scope and terminology

- An **artifact** is a packaged unit such as a skill, agent definition, command, hook, or plugin.
- A **registry** is a distribution source for artifacts (internal or external).
- A **local repository structure** is how a project stores artifacts in its own source control.

## Relationship to the OLAF repository structure

OLAF defines a repository layout centered on `.olaf/`.
Registries should mirror the artifact organization used in the repository structure, so installers can map remote artifacts to local destinations.

Example local repository structure:

```
.olaf/
├── works/
├── data/
└── ai/
    ├── skills/
    ├── agents/
    ├── commands/
    ├── hooks/
    └── plugins/
```

Example registry structure (distribution layout):

```
.olaf/
└── ai/
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

## Registry manifest (`registries.json`)

The registry must provide a machine-readable manifest that installers can use.
At minimum, it should:

- List available artifacts and their versions.
- Provide download locations.
- Provide metadata needed for governance.

Recommended minimum fields per artifact entry:

- `name`
- `type` (e.g., `skill`, `agent`, `command`, `hook`, `plugin`)
- `version`
- `path` (path inside the registry layout)
- `checksum` (for integrity)
- `description`

## Naming and versioning conventions

- Use **kebab-case** for artifact folder names.
- Use **semantic versioning** for artifact releases when possible.
- Keep artifact identity stable. If behavior changes significantly, prefer a version bump over renaming.

## Installer expectations

Installers should be able to:

- Install artifacts from one or multiple registries into the local `.olaf/ai/` structure.
- Resolve and enforce artifact versions.
- Support enterprise policy (allowed registries, required artifacts, pinned versions).
- Roll back to a previous version when needed.
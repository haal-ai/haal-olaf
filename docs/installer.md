# Installer

Most enterprises invest time and effort to create a single installation mechanism for all the tools they use.

They aim to:
1. Simplify installation, upgrade, and uninstallation of all artifacts across all tools
2. Improve usability of all tools
3. Secure distribution of all artifacts

Given the rationale for this proposal, this approach creates burden with little value for users and enterprises.

## Proposal
We aim to define requirements for a common installer that works with all artifacts in all tools, or to simplify vendor solutions when installing a new tool alongside existing ones.

**Important Note**: This installer installs artifacts (skills, agents, commands, hooks, etc.) on existing tools, not the tools themselves.

### Common installer requirements

1. Installer MUST retrieve all artifacts from one or multiple registries in a single step
2. Installer MUST install, upgrade, and uninstall all artifacts across all supported tools in a single step
3. Installer should enforce required skills, agents, hooks, etc., for all users in a team or organization
4. Installer MAY collect install, upgrade, and uninstall telemetry
5. Installer should work with IDE, CLI, or deployable agents
6. Installer MUST enforce minimum and maximum supported tool versions
7. Installer should verify dependencies exist before installation (e.g., git, Python, shell access, etc.)
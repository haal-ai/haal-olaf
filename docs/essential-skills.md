# Essential Skills

This document lists the essential skills that should always be provided in the OLAF framework to ensure consistent functionality across all implementations.

## Core Skills

### Create Skills
- **create-skill** - Create new skills with proper structure and templates
- **create-skill-description** - Generate comprehensive descriptions for existing skills
- **create-step-by-step-tutorial-for-skill** - Create detailed tutorials for skill usage

### Interaction and Challenge Skills  
- **challenge-me** - Interactive ideation engine that challenges ideas through iterative cycles
- **research-and-report** - Structured research with comprehensive reporting and validation
- **search-and-learn** - Systematic information discovery and practical application

### Conversion and Transformation Skills
- **convert-prompt-to-skill** - Transform existing prompts into structured OLAF skills
- **save-conversation** - Capture and store conversation records for future reference

### Session Management Skills
- **carry-over-session** - Create carry-over notes with next prompts and files for session continuation
- **carry-on-session** - Load latest carry-over note and propose immediate next action

## Rationale

These essential skills provide:

1. **Self-sufficiency** - Framework can create and maintain its own skills
2. **Knowledge management** - Tools for research, learning, and documentation
3. **Session continuity** - Ability to maintain context across sessions
4. **Quality assurance** - Skills for challenging and improving ideas
5. **Conversion capabilities** - Transform existing content into OLAF format

## Implementation Guidelines

- All skills should follow the naming conventions specified in `skills-conventions.md`
- Skills must include proper front matter with descriptions and tags
- Each skill should have comprehensive documentation and examples
- Skills should be versioned and maintained in the git repository
- Implementations should be tested across different agent platforms

## Priority Level

These skills are considered **high priority** and should be implemented first in any OLAF-compliant system, as they enable the creation and management of additional skills and provide core functionality for users.

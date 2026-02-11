# Skills Convention

## Skill folder naming  
- Use kebab-case for skill folder names
- Follow format 'verb-object-complements'
- Use unique names 
- e.g., 'review-git-diff', 'challenge-me', 'bootstrap-functional-spec-from-code'

## Skill folder structure
Follow specification for naming and structure.

For skill subfolders, we recommend:
```
skill-1/
├── SKILL.md
├── templates/
├── kb/
├── tools/
└── docs/
    ├── descriptions.md
    ├── tutorial.md
    └── examples/
```
Where:
- `templates/` contains all templates referenced in the SKILL.md file - these can be .md, .json, .txt, etc.
- `kb/` contains all knowledge base files referenced in the SKILL.md file - these can be .md, .json, .txt, etc.
- `tools/` contains all tools referenced in the SKILL.md file - these can be .py, .js, .ts, etc.
- `docs/` contains all documentation files referenced in the SKILL.md file - these can be .md, .json, .txt, etc.
- `examples/` contains conversation trajectories showing skill usage - these should be .md files.

## Front Matter
Follow specification format strictly:
- Ensure description field is clear and uses crisp, precise words
- Avoid acronyms or jargon in descriptions as LLMs may misinterpret them

You may add optional metadata fields to front matter. We recommend:

```yaml
olaf_tags: "tag1, tag2"
```

## SKILL.md length and content
- Average 200 lines and never exceed 500 lines
- We recommend splitting skills into subskills when reaching 300 lines
- Alternatively, use chained tasks to break skills into multiple steps
- Avoid duplicating content in templates
- Prefer templates referenced in SKILL.md files for reproducible results, easier updates, and better sharing
  - However, letting LLMs generate documents from instructions may be more efficient and produce compact results

## Injecting rules and guidance
- SKILL.md primarily guides AI execution workflow and must provide rules and guidance for task performance
- We recommend using include files from the kb/ subfolder to make skills self-sustaining
- Skills may reference external files such as coding, review, git, writing, or communication guidelines shared with other skills but specific to the repository or set of repositories.

## Skill feedback loop
- Always include acceptance criteria in skills to make them functionally self-sustaining
- When possible, embed verification tests (unit tests, documentation checking, code review versus guidelines, etc.) directly in skills.
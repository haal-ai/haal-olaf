# Common Practices

## Manage Context Effectively
As of January 2026, window context remains the most valuable resource for all AI solutions.

### Use small context and instruction files
1. Limit automatically loaded files (e.g., CLAUDE.md, global rules) in every session to fewer than 50 lines
2. Use command-based or knowledge skills to specify additional context files
3. When possible, keep agent-injected context under 12,000 tokens or 40% of window size
### Minimize MCP tool usage
1. Keep only 2 to 3 MCP servers in your MCP.json files
2. Avoid MCP servers with more than 5 tools
3. Limit to 30 tools in any session, including internal agent tools and MCP-provided tools
4. Control which 'magic' tools load from new or updated IDE extensions or plugins (e.g., GitKraken, GitHub app modernization)
### Prefer shell/bash commands over tools
1. Use CLI instead of MCP servers (e.g., git, GitHub, Azure, AWS)
2. Create your own tools in shell, Python, or other languages to summarize analysis and results
3. Ensure shell/bash or other tool outputs are small and easy for agents to read
### Use parallel or subagents for long tasks
1. Use input and output files to/from agents
2. Apply all above practices to subagents
### Manage your own summarization and handover to next agent
1. Create or reuse a skill that users can trigger to transfer useful context to the next agent when you reach context limits
- This applies unless the agent already manages it (e.g., Windsurf)
### Favor progressive or conditional context loading
1. Use skills over other prompt and command forms to enable progressive loading
2. Use chained tasks for long sequential workflows
3. Separate skills into orchestrated sub-skills
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Byten Engineering & Design System Guidelines

This workspace is governed by strict agent skillsets, design craft standards, code discipline, and change tracking.

## 1. Project Context & Authoritative Documents
- **Brand & Services**: [docs/PRODUCT.md](docs/PRODUCT.md)
- **Visual Design & Tokens**: [docs/DESIGN.md](docs/DESIGN.md)
- **Agent Orchestration**: [docs/ORCHESTRATION.md](docs/ORCHESTRATION.md)
- **Active State & Roadmap**: [PROJECT_STATE.md](PROJECT_STATE.md)
- **Version History & Changes**: [CHANGELOG.md](CHANGELOG.md)
- **Architecture Decisions**: [docs/adr/](docs/adr/)
- **Codebase Knowledge Graph**: [graphify-out/GRAPH_REPORT.md](graphify-out/GRAPH_REPORT.md)

## 2. Core Agent Rules
All agents operating in this workspace must respect the rules in `.agents/rules/`:
1. **UI & UX Craft** (`.agents/rules/ui-craft.md`): Enforce Impeccable and Intent principles. Reject generic "AI slop", purple gradient clichés, low contrast, and unverified mockups.
2. **Code Discipline** (`.agents/rules/code-discipline.md`): Enforce the Ponytail 7-step Necessity Ladder. The best code is the code you never wrote. Reuse existing patterns, rely on the standard library, and avoid bloated third-party dependencies.
3. **Change Tracking** (`.agents/rules/change-tracking.md`): Continuously log non-trivial modifications in `CHANGELOG.md`, update `PROJECT_STATE.md`, and record ADRs for structural changes.
4. **Knowledge Graph** (`.agents/rules/graphify.md`): Query `graphify-out/` before answering complex codebase architecture questions.

## 3. Available Skill Commands
- **UI Craft (Impeccable)**: `/audit`, `/critique`, `/polish`, `/typeset`, `/adapt`, `/bolder`, `/quieter`
- **UX Strategy (Intent)**: `/strategize`, `/wireframe`, `/articulate`, `/evaluate`, `/fortify`
- **Code Quality (Ponytail)**: `/ponytail`, `/ponytail-review`, `/ponytail-audit`, `/ponytail-debt`
- **Knowledge Graph (Graphify)**: `/graphify`, `/graphify update`
- **Change Management**: `/track-changes`

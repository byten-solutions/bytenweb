---
name: track-changes
description: Use this skill when completing a feature, refactor, or architectural change to update CHANGELOG.md, synchronize PROJECT_STATE.md, or author an Architecture Decision Record (ADR).
---

# Change Tracking & Audit Skill

This skill enforces systematic tracking of project changes, maintaining an accurate audit trail as the Byten platform evolves.

---

## When to Use This Skill
- After completing a new feature, page, or major component.
- After refactoring code or redesigning interface sections.
- When introducing a new architectural pattern, dependency, or configuration.
- When the user asks "track changes", "update changelog", or "record this decision".

---

## Workflow Steps

### 1. Inspect Git Diff
Examine the active changes to identify exactly what files were added, modified, or removed:
```bash
git status --short
git diff --stat
```

### 2. Update `CHANGELOG.md`
Navigate to `CHANGELOG.md` and append an entry under `## [Unreleased]` using the appropriate category:
- **`Added`**: for new features, pages, or components.
- **`Changed`**: for changes in existing functionality or design updates.
- **`Deprecated`**: for once-stable features removed in upcoming releases.
- **`Removed`**: for deprecated features removed in this release.
- **`Fixed`**: for any bug fix.
- **`Security`**: to invite users to upgrade in case of vulnerabilities.

### 3. Synchronize `PROJECT_STATE.md`
- Check if current active milestones in `PROJECT_STATE.md` need their status updated (e.g., from `⏳ Queued` to `🔄 In Progress` or `✅ Complete`).
- If any intentional technical debt or temporary shortcut was made (commented with `shortcut:` or `ponytail:`), record it in Section 4 (*Current Technical Debt & Shortcuts*).

### 4. Create an ADR (If Architectural Decision Was Made)
If the task introduced a non-trivial architectural change, new infrastructure, or a major dependency:
1. Locate the next available index in `docs/adr/` (e.g., `0002-title.md`).
2. Write the decision record following the format in `docs/adr/README.md`.
3. Add a link in `PROJECT_STATE.md`.

### 5. Update Code Graph
If source files or dependencies were modified, run graphify to refresh the AST knowledge graph:
```bash
/Users/apple/Library/Python/3.13/bin/graphify update .
```

# Graph Report - bytenweb  (2026-10-25)

## Corpus Check
- 115 files · ~244,152 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 13 file(s) not represented in the graph (top: .toml 4, .css 4, (none) 3)

## Summary
- 2024 nodes · 3599 edges · 126 communities (121 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 81 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `46b3d087`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- live-browser.js
- handleManualEditActivity
- modern-screenshot.umd.js
- el
- Intent
- package.json
- startVariantObserver
- connectSSE
- applyEditing
- renderDesignVisual
- initGlobalBar
- showToast
- Blueprint — Map the System
- Wireframe
- live.md
- createLiveBrowserDomHelpers
- new-work.md
- actOnAgentTarget
- Interaction Patterns
- generate.md
- Measure — Define and Track Success
- build_deck.py
- Information Architecture
- Core capabilities
- Present
- Content Strategy
- onboard.md
- Strategize — Frame the Problem
- impeccable/SKILL.md
- The Philosopher — Sit With the Problem
- The Toolkit
- scheduleAcceptCleanup
- createLiveBrowserSessionState
- Regulatory Landscape
- Core capabilities
- Organize
- Extract Flow
- Investigate
- Transpose — Adapt Across Contexts
- compilerOptions
- Articulate
- injectSvelteComponentsFromManifest
- onAnnotDown
- viewer.js
- adapt.md
- animate.md
- Handle `generate`
- setLiveState
- Generate Report
- Core capabilities
- Service Design
- Storytelling
- Evaluate — Assess UX Quality
- Core capabilities
- New visual work
- optimize.md
- intent/SKILL.md
- Specify — Package the design for the build
- Impeccable Asset Producer
- Scan mode (approach C: auto-extract, then confirm descriptive language)
- showBar
- intent/SKILL.md
- critique.md
- Simplify the Design
- Hardening Dimensions
- AGENTS.md
- clarify.md
- Nielsen's 10 Heuristics
- Generate Combined Critique Report
- document.md
- polish.md
- quieter.md
- Form Design Principles
- Responsive Design
- Init flow
- syncEditBadgeHitProxies
- Accessibility Foundations
- Common Cognitive Load Violations
- iOS platform
- Operate mode depth (and Read notes)
- Ponytail Help
- adapt.native.md
- Android platform
- colorize.md
- Persona-Based Design Testing
- doctor.md
- A/B Test Design
- Shape
- Generate Report
- Cognitive Load Assessment
- Impeccable Finish Reviewer
- Impeccable Manual Edit Applier
- live-browser-ignores.js
- /present default theme
- Diagnostic Scan
- Statistical Literacy for Designers
- Visualize: Direction Comps & Asset Production
- showAnnotOverlay
- interface
- Impeccable Documenter
- Region map
- resolveLiveInjectionAnchor
- Feedback Loops
- Workflow Steps
- $impeccable hooks
- Voice Framework Methodology
- UI & UX Craftsmanship Rules (Impeccable & Intent)
- ponytail-audit/SKILL.md
- Ponytail Gain
- ponytail-review/SKILL.md
- Ponytail
- Heuristics Scoring Guide
- 2. Homepage Redesign & Obsidian Technical Design System
- Operate
- Read
- Synthesis Techniques
- Method Selection Matrix
- ponytail-debt/SKILL.md
- README.md
- postcss.config.mjs
- 1. Integration of Agent Skillsets, Code Discipline, and Change Tracking
- Architecture Decision Records (ADRs)
- Code Discipline Rules (Ponytail Minimalism)
- change-tracking.md

## God Nodes (most connected - your core abstractions)
1. `connectSSE()` - 34 edges
2. `setLiveState()` - 33 edges
3. `resumeSession()` - 33 edges
4. `showToast()` - 31 edges
5. `el()` - 30 edges
6. `initGlobalBar()` - 30 edges
7. `buildInsertConfigureRow()` - 27 edges
8. `handleKeyDown()` - 27 edges
9. `cleanup()` - 27 edges
10. `injectSvelteComponentsFromManifest()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `Step 2: Act by severity` --references--> `init()`  [INFERRED]
  .agents/skills/impeccable/reference/doctor.md → .agents/skills/impeccable/scripts/live-browser.js
- `What this owns, and what it does not` --references--> `init()`  [INFERRED]
  .agents/skills/impeccable/reference/doctor.md → .agents/skills/impeccable/scripts/live-browser.js
- `Commands` --references--> `init()`  [INFERRED]
  .agents/skills/impeccable/SKILL.md → .agents/skills/impeccable/scripts/live-browser.js
- `Init flow` --references--> `init()`  [INFERRED]
  .agents/skills/impeccable/reference/init.md → .agents/skills/impeccable/scripts/live-browser.js
- `enableInlineEdit()` --indirect_call--> `own()`  [INFERRED]
  .agents/skills/impeccable/scripts/live-browser.js → .agents/skills/impeccable/scripts/live-browser-dom.js

## Import Cycles
- None detected.

## Communities (126 total, 5 thin omitted)

### Community 0 - "live-browser.js"
Cohesion: 0.05
Nodes (73): actionLabel(), applyLiveBarPreference(), applyPlaceholderSizingStyles(), averageRgb01(), bufferToBase64(), buildDots(), buildGeneratingRow(), buildSavingRow() (+65 more)

### Community 1 - "handleManualEditActivity"
Cohesion: 0.18
Nodes (25): clearStoredManualApplyState(), fetchPendingCount(), handleManualEditActivity(), hidePendingApplyDock(), manualApplyLoadingText(), manualApplyStateKey(), manualEditEventForCurrentPage(), numberOrNull() (+17 more)

### Community 2 - "modern-screenshot.umd.js"
Cohesion: 0.09
Nodes (55): ae(), be(), bt(), Ce(), s(), Ct(), de(), dt() (+47 more)

### Community 3 - "el"
Cohesion: 0.06
Nodes (77): agentHasWorkInFlight(), armPageChatForTyping(), bindConfigureCountPillTooltip(), bindConfigureInlineControlHover(), bindConfigureModifierPillHover(), buildConfigureActionControl(), buildConfigureCountControl(), buildConfigureRow() (+69 more)

### Community 4 - "Intent"
Cohesion: 0.04
Nodes (45): 1. Respect user autonomy, 2. Design for real conditions, 3. Make intent visible, 4. Evidence over intuition, 5. Systems over screens, 6. Ethical defaults, Assessment-to-action pipeline, By what the user needs done (+37 more)

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (36): dmSans, metadata, eslintConfig, nextConfig, dependencies, next@16.2.1, react@19.2.4, react-dom@19.2.4 (+28 more)

### Community 6 - "startVariantObserver"
Cohesion: 0.10
Nodes (45): applyParamDefaults(), applyParamValue(), applyPlaceholderDimensions(), buildParamsPanel(), closedClipPath(), commitAcceptedVariantToDom(), completeParameterGenerationIfReady(), completeParameterPublication() (+37 more)

### Community 7 - "connectSSE"
Cohesion: 0.12
Nodes (30): applySavedSessionMeta(), checkpointPayload(), clampVariantIndex(), connectSSE(), enterRecoveryWaitingForAnchor(), findActiveSessionSummary(), findAdoptableServerSession(), findAnyVariantsWrapper() (+22 more)

### Community 8 - "applyEditing"
Cohesion: 0.09
Nodes (31): addManualContextText(), applyEditing(), buildLocatorForLeaf(), cancelEditing(), canRestoreManualEditElement(), collectManualContextPieces(), walk(), contextElementForManualEdit() (+23 more)

### Community 9 - "renderDesignVisual"
Cohesion: 0.08
Nodes (36): buildCollapsible(), buildColorModels(), buildListHtml(), buildRadiiModels(), buildTypographyModels(), copyToClipboard(), cssSafe(), designEmptyMessage() (+28 more)

### Community 10 - "initGlobalBar"
Cohesion: 0.05
Nodes (93): agentStatusText(), applyGlobalBarLabelState(), attachSteerFocusDebug(), attachSteerFocusGuard(), barPaletteForTheme(), beginNewLiveConfiguration(), brandMarkSvg(), buildDesignHeader() (+85 more)

### Community 11 - "showToast"
Cohesion: 0.16
Nodes (18): abandonForeignSession(), abandonSupersededGo(), discardOrphanedSession(), dismissToast(), handleDiscard(), injectVariantsFromSource(), isJsxSourceFile(), isSvelteComponentManifestPath() (+10 more)

### Community 12 - "Blueprint — Map the System"
Cohesion: 0.07
Nodes (29): 1. Service blueprinting, 2. Ecosystem & dependency mapping, 3. Process architecture, 4. System state & failure mode analysis, 5. Scalability & evolution planning, 6. The decision log, Ask first, Blueprint — Map the System (+21 more)

### Community 13 - "Wireframe"
Cohesion: 0.07
Nodes (29): 1. Screen anatomy & zoning, 2. Hierarchy without styling, 3. Layout patterns, 4. Content-first wireframing, 5. Annotation discipline, 6. Wireflow & prototype assembly, 7. Divergence practice, Ask first (+21 more)

### Community 14 - "live.md"
Cohesion: 0.12
Nodes (15): Cleanup, Exit, First-time setup, Handle `accept`, Handle `discard`, Handle fallback, Handle `manual_edit_apply`, Handle `prefetch` (+7 more)

### Community 15 - "createLiveBrowserDomHelpers"
Cohesion: 0.11
Nodes (22): collectEditableTextRows(), visit(), createLiveBrowserDomHelpers(), activeElementDeep(), cloneWithoutChrome(), copyTextViaSelection(), cssId(), liveUiRoot() (+14 more)

### Community 16 - "new-work.md"
Cohesion: 0.10
Nodes (18): Recommended Actions, Craft (deprecated alias), Apply, Live-mode signature params, Set the spatial thesis, Two isolated assessments, Verify, Visitor mode (+10 more)

### Community 17 - "actOnAgentTarget"
Cohesion: 0.29
Nodes (17): actOnAgentTarget(), agentTargetBusyReason(), agentTargetOverlayGone(), agentTargetTaken(), claimAgentTarget(), claimAndActOnAgentTarget(), declineAgentTargetBusy(), declineAgentTargetUnresolvable() (+9 more)

### Community 18 - "Interaction Patterns"
Cohesion: 0.12
Nodes (17): Anti-Patterns in Progressive Disclosure, Button States, Design Principles for Undo, Destructive Action Safeguards, Error Message Design, Form Field States, Friction Hierarchy, Implementation Approaches (+9 more)

### Community 19 - "generate.md"
Cohesion: 0.15
Nodes (11): Step 1: Parse the request, Step 2: Reuse the page, then start, Step 3: Generate, Step 4: Accept and close, append-arrays, append-string, Config drift, Consent prompt (use this phrasing) (+3 more)

### Community 20 - "Measure — Define and Track Success"
Cohesion: 0.08
Nodes (25): 1. Metric selection: HEART framework, 2. Goal-Signal-Metric mapping, 3. A/B test design, 4. Funnel analysis, 5. Qualitative and quantitative triangulation, 6. Ethical measurement, A/B test plan template, Core capabilities (+17 more)

### Community 21 - "build_deck.py"
Cohesion: 0.13
Nodes (12): build(), _bullets(), _chart(), _flush(), _new_slide(), _placeholder(), _px(), _set_alt() (+4 more)

### Community 22 - "Information Architecture"
Cohesion: 0.08
Nodes (24): Applied Mental Model Theory, Card Sort and Tree Test Methodology, Core Wayfinding Principles, Dashboard, Don't-Know-What-I-Don't-Know, Exploratory Search, Faceted, Flat (+16 more)

### Community 23 - "Core capabilities"
Cohesion: 0.08
Nodes (24): 10. Journey state management, 1. End-to-end flow mapping, 2. User context & variation handling, 3. Task analysis & flow optimization, 4. Flow optimization patterns, 5. Copy specifications, 6. Interaction & animation specifications, 7. Device-aware design (+16 more)

### Community 24 - "Present"
Cohesion: 0.08
Nodes (24): 1. Infer first, 2. Interview the gaps, 3. Confirm the brief, 4. The outline checkpoint, 5. Build, 6. Pre-flight, then deliver, All formats, Figma Slides (+16 more)

### Community 25 - "Content Strategy"
Cohesion: 0.11
Nodes (18): Building a Terminology Glossary, Confirmation Messages, Content Modeling, Content Reuse, Content Strategy, Empty States, Jargon Management, Localization-Ready Content (+10 more)

### Community 26 - "onboard.md"
Cohesion: 0.09
Nodes (22): Assess Onboarding Needs, Context Over Ceremony, Contextual Help, Design Onboarding Experiences, Documentation & Help, Empty State Design, Feature Discovery & Adoption, Guided Tours & Walkthroughs (+14 more)

### Community 27 - "Strategize — Frame the Problem"
Cohesion: 0.09
Nodes (22): 1. Design brief synthesis, 1. Problem Validation — Is this truly a problem people have?, 2. Audience Definition — Who exactly has this problem?, 2. Research synthesis & evidence grounding, 3. Opportunity sizing & hypothesis definition, 3. Solution Fit — Is this the right solution?, 4. Customer journey mapping & context building, 4. Feature Validation — Is the feature set right? (+14 more)

### Community 28 - "impeccable/SKILL.md"
Cohesion: 0.10
Nodes (15): Before you finish, Scope is sovereign, The amplification, The skeleton test, Why it reads flat, Craft floor, Refuse, Verify (+7 more)

### Community 29 - "The Philosopher — Sit With the Problem"
Cohesion: 0.09
Nodes (21): Adaptation & Measurement, Check-in at intensity levels, Check-in rhythm, Check-ins and Exiting the Mode, Exiting cleanly, Experience Design, Handoff, How this skill fits the design practice (+13 more)

### Community 30 - "The Toolkit"
Cohesion: 0.10
Nodes (20): Animate complex properties, Assess What "Extraordinary" Means Here, For data-heavy interfaces, For functional UI, For performance-critical UI, For visual/marketing surfaces, Implement with Discipline, Interact with the device (+12 more)

### Community 31 - "scheduleAcceptCleanup"
Cohesion: 0.31
Nodes (11): acceptedDomAlreadyClean(), clearHandledWrapperReloadStamp(), deferredRecoverySuperseded(), ensureAcceptedDomClean(), findAcceptedRuntimeWrappers(), handledWrapperReloadKey(), reloadAfterMissingAcceptedDom(), restoreAcceptedDomFromSnapshot() (+3 more)

### Community 32 - "createLiveBrowserSessionState"
Cohesion: 0.19
Nodes (17): createLiveBrowserSessionState(), clearHandled(), clearScrollY(), clearSession(), isHandled(), loadSession(), markHandled(), nextCheckpointRevision() (+9 more)

### Community 33 - "Regulatory Landscape"
Cohesion: 0.10
Nodes (20): Addictive Design → Respectful Engagement, Anti-Pattern Remediation Guide, California CPRA (2023) and Automated Decision-Making, Common consent failures, Consent Design Patterns, Consent interface patterns, Consequence Scanning, COPPA (United States, 1998 / Updated 2013) (+12 more)

### Community 34 - "Core capabilities"
Cohesion: 0.10
Nodes (19): 1. Cultural dimension analysis for UX, 2. RTL and LTR design, 3. Content adaptation beyond translation, 4. Visual and symbolic adaptation, 5. Market-specific compliance, 6. Localization testing, Core capabilities, Cultural adaptation brief (+11 more)

### Community 35 - "Organize"
Cohesion: 0.10
Nodes (19): 1. Navigation pattern design, 2. Taxonomy design, 3. Labeling systems, 4. Search and browse design, 5. Wayfinding design, 6. IA research methods, Ask first, Core capabilities (+11 more)

### Community 36 - "Extract Flow"
Cohesion: 0.25
Nodes (7): Extract Flow, Step 1: Discover the Design System, Step 2: Identify Patterns, Step 3: Plan Extraction, Step 4: Extract & Enrich, Step 5: Migrate, Step 6: Document

### Community 37 - "Investigate"
Cohesion: 0.11
Nodes (18): 1. Research planning & method selection, 2. Interview guide construction, 3. Usability test planning, 4. Survey design, 5. Synthesis frameworks, 6. Communicating findings, Core capabilities, Findings report (+10 more)

### Community 38 - "Transpose — Adapt Across Contexts"
Cohesion: 0.11
Nodes (18): 1. Context analysis framework, 2. Platform-specific UX conventions, 3. Content priority shifting, 4. Cross-device journey continuity, 5. Progressive disclosure per context, Context analysis matrix, Core capabilities, Cross-device journey map (+10 more)

### Community 39 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 40 - "Articulate"
Cohesion: 0.12
Nodes (16): 1. Voice and tone framework creation, 2. Error message design, 3. Empty state design, 4. CTA and action language, 5. Microcopy patterns, 6. Content modeling, 7. Inclusive language, Articulate (+8 more)

### Community 41 - "injectSvelteComponentsFromManifest"
Cohesion: 0.18
Nodes (18): applyOriginalAttrsToSvelteAnchor(), commitAcceptedSvelteComponentToDom(), componentModuleCandidates(), describeMountFailure(), detectDevServerBase(), findInsertAnchorInDom(), findLiveElementForSvelteManifest(), getMountedSvelteComponentAnchor() (+10 more)

### Community 42 - "onAnnotDown"
Cohesion: 0.20
Nodes (17): beginEditPin(), buildAnnotationsForCapture(), buildPinElement(), cancelEditingPin(), clampPlaceholderSize(), finalizeEditingPin(), initAnnotOverlay(), localCoords() (+9 more)

### Community 43 - "viewer.js"
Cohesion: 0.20
Nodes (15): fit(), frames, go(), histBack(), indexLinks, linked, nextBtn, prevBtn (+7 more)

### Community 44 - "adapt.md"
Cohesion: 0.12
Nodes (15): Assess Adaptation Challenge, Content Adaptation, Desktop Adaptation (Mobile → Desktop), Email Adaptation (Web → Email), Implement Adaptations, Layout Adaptation Techniques, Mobile Adaptation (Desktop → Mobile), Navigation Adaptation (+7 more)

### Community 45 - "animate.md"
Cohesion: 0.12
Nodes (14): Accessibility and control, Choose material by meaning, Find the job, Implement to the runtime, Set the motion thesis, Timing and easing, Verify, Visitor mode (+6 more)

### Community 46 - "Handle `generate`"
Cohesion: 0.12
Nodes (16): 1. Read the screenshot (if present), 2. Wrap the element, 3. Load the action's reference, 4. Plan three variants: identity first, then mode, then axes, 5. Apply the freeform prompt (if present), 6. Deliver variants, 7. Parameters (composition-sized, 0-4 per variant), 8. Signal done (+8 more)

### Community 47 - "setLiveState"
Cohesion: 0.11
Nodes (37): abortSvelteComponentInjection(), buildInsertPlaceholderSnapshotFromDom(), buildPickedAnchorSnapshot(), captureAndEmit(), cleanup(), cleanupAcceptedSession(), clearHandled(), clearMountErrorCard() (+29 more)

### Community 48 - "Generate Report"
Cohesion: 0.13
Nodes (14): 1. Accessibility (A11y), 2. Performance, 3. Theming, 4. Responsive Design, 5. Implementation Integrity (CRITICAL), Audit Health Score, Detailed Findings by Severity, Diagnostic Scan (+6 more)

### Community 49 - "Core capabilities"
Cohesion: 0.13
Nodes (14): 1. WCAG 2.2 for designers, 2. Screen reader experience design, 3. Keyboard navigation design, 4. Cognitive accessibility, 5. Motor accessibility, 6. Inclusive design beyond compliance, 7. Accessibility testing methodology, Core capabilities (+6 more)

### Community 50 - "Service Design"
Cohesion: 0.10
Nodes (19): Channel Orchestration, Cross-Channel Consistency, Designing for Moments of Truth, Fail Point Categories, Fail Point Identification and Recovery Design, Identifying Moments of Truth, Modern Blueprint Layers, Moment-of-Truth Analysis (+11 more)

### Community 51 - "Storytelling"
Cohesion: 0.13
Nodes (14): Discipline = what protects the goal from becoming the pathology, Multi-pattern situations, Notes on the set, Output shape, Overview, Skill family, Standalone workflow, Storytelling (+6 more)

### Community 52 - "Evaluate — Assess UX Quality"
Cohesion: 0.14
Nodes (13): 1. Heuristic evaluation, 2. Cognitive walkthrough, 3. Anti-pattern detection, 4. Task success analysis, 5. Assessment-to-action routing, Core capabilities, Evaluate — Assess UX Quality, Evaluation output format (+5 more)

### Community 53 - "Core capabilities"
Cohesion: 0.14
Nodes (13): 1. State inventory, 2. Error recovery design, 3. First-run experience design, 4. Stress testing prompts, 5. Internationalization readiness, 6. Timeout and latency handling, Core capabilities, Fortify — Harden for Real-World Use (+5 more)

### Community 54 - "New visual work"
Cohesion: 0.14
Nodes (14): 1. Decide what is already true, 2. Ask what will change the work, 3. Choose the right amount of invention, 4. Commit the world, 5. Record the decision, 6. Build with full commitment, 7. Inspect and finish, Both paths (+6 more)

### Community 55 - "optimize.md"
Cohesion: 0.14
Nodes (13): Animation Performance, Assess Performance Issues, Core Web Vitals Optimization, Cumulative Layout Shift (CLS < 0.1), Interaction to Next Paint (INP < 200ms), Largest Contentful Paint (LCP < 2.5s), Loading Performance, Network Optimization (+5 more)

### Community 56 - "intent/SKILL.md"
Cohesion: 0.15
Nodes (9): Bias Avoidance in Research, Breadth as Fact, Common Communication Failures, Communicating Findings, Findings Format, In analysis, In question design, In sampling (+1 more)

### Community 57 - "Specify — Package the design for the build"
Cohesion: 0.14
Nodes (13): Form, Overview, Readiness, Scope boundaries, Skill family, Specify — Package the design for the build, The entry page, The ethical check (+5 more)

### Community 58 - "Impeccable Asset Producer"
Cohesion: 0.15
Nodes (11): Act on the receipt, Assemble and review, Plan and asset review, Plan, capture, serve, Core Rule, Decision Comps, Impeccable Asset Producer, Input Contract (+3 more)

### Community 59 - "Scan mode (approach C: auto-extract, then confirm descriptive language)"
Cohesion: 0.15
Nodes (13): Component translation rules, Narrative mapping, Scan mode (approach C: auto-extract, then confirm descriptive language), Schema, Step 1: Find the design assets, Step 2: Auto-extract what can be auto-extracted, Step 2b: Stage the frontmatter, Step 3: Ask the user for qualitative language (+5 more)

### Community 60 - "showBar"
Cohesion: 0.26
Nodes (12): applyConfigureBarChrome(), buildConfirmedRow(), buildCyclingRow(), cycleVariant(), cyclingCounterText(), cyclingShownVariant(), ensureCyclingRenderable(), navBtn() (+4 more)

### Community 61 - "intent/SKILL.md"
Cohesion: 0.14
Nodes (13): Applying HEART by Feature Type, Common GSM Mistakes, Engagement vs. Wellbeing, Ethical Measurement, Ethical Measurement Principles, Goal-Signal-Metric (GSM) Mapping, Goodhart's Law, GSM Example: Search Feature (+5 more)

### Community 62 - "critique.md"
Cohesion: 0.17
Nodes (11): Action Summary, Ask the User, Assessment A: Design Review, Assessment B: Detector + Browser Evidence, Assessment Orchestration, Deliver the Report, Hard Invariants, Persist the Snapshot (+3 more)

### Community 63 - "Simplify the Design"
Cohesion: 0.17
Nodes (11): Assess Current State, Code Simplification, Content Simplification, Document Removed Complexity, Information Architecture, Interaction Simplification, Layout Simplification, Plan Simplification (+3 more)

### Community 64 - "Hardening Dimensions"
Cohesion: 0.17
Nodes (11): Accessibility Resilience, Assess Hardening Needs, Edge Cases & Boundary Conditions, Error Handling, Hardening Dimensions, Input Validation & Sanitization, Internationalization (i18n), Performance Resilience (+3 more)

### Community 65 - "AGENTS.md"
Cohesion: 0.04
Nodes (40): 1. Project Context & Authoritative Documents, 2. Core Agent Rules, 3. Available Skill Commands, Byten Engineering & Design System Guidelines, This is NOT the Next.js you know, [0.1.0] - 2026-10-25, Added, Added (+32 more)

### Community 66 - "clarify.md"
Cohesion: 0.18
Nodes (10): Actions and navigation, Audit the language, Errors and permissions, Forms, Help and instructional text, Loading, empty, and success states, Rewrite by function, Set the message hierarchy (+2 more)

### Community 67 - "Nielsen's 10 Heuristics"
Cohesion: 0.18
Nodes (11): 10. Help and Documentation, 1. Visibility of System Status, 2. Match Between System and Real World, 3. User Control and Freedom, 4. Consistency and Standards, 5. Error Prevention, 6. Recognition Rather Than Recall, 7. Flexibility and Efficiency of Use (+3 more)

### Community 68 - "Generate Combined Critique Report"
Cohesion: 0.18
Nodes (11): Design Health Score, Design Specificity Verdict, Generate Combined Critique Report, Minor Observations, Overall Impression, Persona Red Flags, Priority Issues, Questions to Consider (+3 more)

### Community 69 - "document.md"
Cohesion: 0.18
Nodes (10): Pitfalls, Seed mode, Step 1: Route through new-work's workshop, Step 2: Write seed DESIGN.md, Step 3: Confirm, Style guidelines, The frontmatter: token schema, The markdown body: eight sections (canonical order) (+2 more)

### Community 70 - "polish.md"
Cohesion: 0.18
Nodes (10): 1. Establish the system, 2. Gather the evidence, 3. Triage, 4. Polish the whole path, 5. Verify and finish, Color, imagery, and icons, Content and code, Flow and hierarchy (+2 more)

### Community 71 - "quieter.md"
Cohesion: 0.18
Nodes (10): Assess Current State, Color Refinement, Composition Refinement, Motion Reduction, Plan Refinement, Refine the Design, Simplification, Verify Quality (+2 more)

### Community 72 - "Form Design Principles"
Cohesion: 0.40
Nodes (5): Field Grouping, Form Design Principles, Inline Validation Timing, One Thing Per Page, Smart Defaults

### Community 73 - "Responsive Design"
Cohesion: 0.20
Nodes (10): Breakpoints: Content-Driven, Detect Input Method, Not Just Screen Size, Layout Adaptation Patterns, Mobile-First: Write It Right, Picture Element for Art Direction, Responsive Design, Responsive Images: Get It Right, Safe Areas: Handle the Notch (+2 more)

### Community 74 - "Init flow"
Cohesion: 0.20
Nodes (10): Completion gate, Init flow, Step 1: Load current state, Step 2: Explore the project, Step 3: Interview for product truth, Step 4: Write PRODUCT.md, Step 5: Record workflow defaults, Step 6: Wrap up or resume (+2 more)

### Community 75 - "syncEditBadgeHitProxies"
Cohesion: 0.27
Nodes (10): bindEditBadgeProxy(), editBadgeProxyTargets(), initEditBadge(), initEditBadgeHitProxies(), positionEditBadge(), proxyMouseEvent(), setImportantStyle(), styleEditBadgeProxy() (+2 more)

### Community 76 - "Accessibility Foundations"
Cohesion: 0.07
Nodes (29): Accessibility Foundations, Aging, Assistive Technology Landscape, Cognitive Accessibility, Consistent Patterns, Error Prevention, Focus Management, Inclusive Design Beyond Disability (+21 more)

### Community 77 - "Common Cognitive Load Violations"
Cohesion: 0.22
Nodes (9): 1. The Wall of Options, 2. The Memory Bridge, 3. The Hidden Navigation, 4. The Jargon Barrier, 5. The Visual Noise Floor, 6. The Inconsistent Pattern, 7. The Multi-Task Demand, 8. The Context Switch (+1 more)

### Community 78 - "iOS platform"
Cohesion: 0.22
Nodes (9): Color & materials, Components & controls, iOS platform, Layout & structure, Motion, The iOS slop test, Touch targets, Typography (+1 more)

### Community 79 - "Operate mode depth (and Read notes)"
Cohesion: 0.22
Nodes (9): Color, Components, Layout, Motion, Operate mode depth (and Read notes), Product constraints, Product permissions, The product slop test (+1 more)

### Community 80 - "Ponytail Help"
Cohesion: 0.22
Nodes (8): Band (Claude Code), Configure Default Mode, Deactivate, Levels, More, Ponytail Help, Skills, Update

### Community 81 - "adapt.native.md"
Cohesion: 0.25
Nodes (7): Adaptation Strategies, Assess Adaptation Challenge, Implement & Verify, Orientation & foldables, Phone → Tablet (iPad / large screens), Platform → platform (iOS ↔ Android), Web → native (porting a website or web app)

### Community 82 - "Android platform"
Cohesion: 0.25
Nodes (8): Android platform, Color & theming, Components & motion, Layout & structure, The Android slop test, Touch targets, Typography, Verifying the build

### Community 83 - "colorize.md"
Cohesion: 0.25
Nodes (7): Apply at system scale, Audit before choosing, Choose a strategy, Contrast and perception, Live-mode signature params, Verify, Visitor mode

### Community 84 - "Persona-Based Design Testing"
Cohesion: 0.25
Nodes (8): 1. Impatient Power User: "Alex", 2. Confused First-Timer: "Jordan", 3. Accessibility-Dependent User: "Sam", 4. Deliberate Stress Tester: "Riley", 5. Distracted Mobile User: "Casey", Persona-Based Design Testing, Project-Specific Personas, Selecting Personas

### Community 85 - "doctor.md"
Cohesion: 0.25
Nodes (7): Monorepo notes, Opting out of the boot check, Step 1: Run the pass, Step 2: Act by severity, Step 3: Deprecated fields are binding, Step 4: Do not overclaim on truth drift, What this owns, and what it does not

### Community 86 - "A/B Test Design"
Cohesion: 0.40
Nodes (5): A/B Test Design, Hypothesis Structure, Minimum Detectable Effect (MDE), Test Duration, What A/B Tests Cannot Tell You

### Community 87 - "Shape"
Cohesion: 0.22
Nodes (8): Cadence, Confirm and stop, Phase 1: Discovery interview, Phase 2: Resolve the design direction, Phase 3: Write the brief, Round 1: purpose, people, and outcome, Round 2: material, behavior, and boundaries, Shape

### Community 88 - "Generate Report"
Cohesion: 0.29
Nodes (7): Audit Health Score, Detailed Findings by Severity, Executive Summary, Generate Report, Patterns & Systemic Issues, Platform Conformance Verdict, Positive Findings

### Community 89 - "Cognitive Load Assessment"
Cohesion: 0.29
Nodes (7): Cognitive Load Assessment, Cognitive Load Checklist, Extraneous Load: Bad Design, Germane Load: Learning Effort, Intrinsic Load: The Task Itself, The Working Memory Rule, Three Types of Cognitive Load

### Community 90 - "Impeccable Finish Reviewer"
Cohesion: 0.29
Nodes (6): Checks, in order, Disposition, Impeccable Finish Reviewer, Input Contract, Output Contract, Verdict Pass

### Community 91 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 93 - "live-browser-ignores.js"
Cohesion: 0.52
Nodes (6): globToRegex(), matchesScope(), normalizeIgnoreRule(), normalizeIgnoreValue(), pageCandidates(), resolveDetectIgnores()

### Community 94 - "/present default theme"
Cohesion: 0.29
Nodes (6): Grid, Layouts, Placeholders, /present default theme, Tokens, Type sizes

### Community 95 - "Diagnostic Scan"
Cohesion: 0.33
Nodes (6): 1. Accessibility (VoiceOver / TalkBack), 2. Performance, 3. Appearance & Theming, 4. Platform Conformance (CRITICAL), 5. Adaptivity, Diagnostic Scan

### Community 96 - "Statistical Literacy for Designers"
Cohesion: 0.40
Nodes (5): Confidence Intervals, Effect Size, Sample Size, Statistical Literacy for Designers, Statistical Significance

### Community 97 - "Visualize: Direction Comps & Asset Production"
Cohesion: 0.33
Nodes (5): After approval: the comp becomes a spec, Generate three compositional options, One approval point, Plates and provenance, Visualize: Direction Comps & Asset Production

### Community 98 - "showAnnotOverlay"
Cohesion: 0.33
Nodes (7): buildPlaceholderResizeHandles(), cursorForPlaceholderEdge(), finalizeInsertSession(), positionAnnotOverlay(), removeInsertPlaceholderDom(), showAnnotOverlay(), syncPlaceholderResizeHandles()

### Community 99 - "interface"
Cohesion: 0.40
Nodes (4): interface, default_prompt, display_name, short_description

### Community 100 - "Impeccable Documenter"
Cohesion: 0.40
Nodes (4): Impeccable Documenter, Input Contract, Output Contract, Workflow

### Community 101 - "Region map"
Cohesion: 0.40
Nodes (4): Containment, Painted material, Region map, What varies independently

### Community 102 - "resolveLiveInjectionAnchor"
Cohesion: 0.62
Nodes (7): elementMatchesOriginalMarkup(), findLiveElementForOriginalMarkup(), findLiveElementFromAnchorSnapshot(), isUsableInjectionAnchor(), normalizeElementClassName(), parseOriginalMarkupElement(), resolveLiveInjectionAnchor()

### Community 103 - "Feedback Loops"
Cohesion: 0.50
Nodes (4): Feedback Loops, Optimistic UI, Progress Indicators, Skeleton Screens

### Community 104 - "Workflow Steps"
Cohesion: 0.22
Nodes (8): 1. Inspect Git Diff, 2. Update `CHANGELOG.md`, 3. Synchronize `PROJECT_STATE.md`, 4. Create an ADR (If Architectural Decision Was Made), 5. Update Code Graph, Change Tracking & Audit Skill, When to Use This Skill, Workflow Steps

### Community 105 - "$impeccable hooks"
Cohesion: 0.33
Nodes (6): Constraints, Failure modes, Flow, $impeccable hooks, Routing, Triage findings

### Community 106 - "Voice Framework Methodology"
Cohesion: 0.40
Nodes (5): Step 1: Brand Attribute Identification, Step 2: Voice Principles, Step 3: Tone Spectrum, Step 4: Writing Guidelines, Voice Framework Methodology

### Community 107 - "UI & UX Craftsmanship Rules (Impeccable & Intent)"
Cohesion: 0.33
Nodes (5): 1. Eliminate AI Clichés, 2. Design System Alignment, 3. Accessibility & Contrast, 4. UI Quality Verification, UI & UX Craftsmanship Rules (Impeccable & Intent)

### Community 108 - "ponytail-audit/SKILL.md"
Cohesion: 0.40
Nodes (4): 1. Map first, 2. Look for, 3. Check before you report, 4. Output

### Community 109 - "Ponytail Gain"
Cohesion: 0.40
Nodes (4): Boundaries, Honesty boundary, Ponytail Gain, Scoreboard

### Community 110 - "ponytail-review/SKILL.md"
Cohesion: 0.40
Nodes (4): 1. Understand first, 2. Look for, 3. Check before you report, 4. Output

### Community 111 - "Ponytail"
Cohesion: 0.40
Nodes (4): Before you write, Levels, Ponytail, The smallest complete change

### Community 112 - "Heuristics Scoring Guide"
Cohesion: 0.50
Nodes (4): Heuristics Scoring Guide, Issue Severity (P0–P3), Reference Material, Score Summary

### Community 113 - "2. Homepage Redesign & Obsidian Technical Design System"
Cohesion: 0.40
Nodes (4): 2. Homepage Redesign & Obsidian Technical Design System, Consequences, Context, Decision

### Community 114 - "Operate"
Cohesion: 0.50
Nodes (3): Comps, Directions, Operate

### Community 115 - "Read"
Cohesion: 0.50
Nodes (3): Comps, Directions, Read

### Community 116 - "Synthesis Techniques"
Cohesion: 0.50
Nodes (4): Affinity Mapping, Journey-Based Synthesis, Synthesis Techniques, Thematic Analysis (Braun & Clarke, 2006)

### Community 117 - "Method Selection Matrix"
Cohesion: 0.50
Nodes (4): Evaluative Methods (Is this working?), Generative Methods (What should we build?), Method Selection Matrix, Structural Methods (How should we organize this?)

### Community 118 - "ponytail-debt/SKILL.md"
Cohesion: 0.50
Nodes (3): Boundaries, Output, Scan

### Community 119 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 124 - "1. Integration of Agent Skillsets, Code Discipline, and Change Tracking"
Cohesion: 0.40
Nodes (4): 1. Integration of Agent Skillsets, Code Discipline, and Change Tracking, Consequences, Context, Decision

### Community 128 - "Architecture Decision Records (ADRs)"
Cohesion: 0.50
Nodes (3): Architecture Decision Records (ADRs), Format, What is an ADR?

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `init()` connect `initGlobalBar` to `live-browser.js`, `handleManualEditActivity`, `connectSSE`, `Init flow`, `onAnnotDown`, `syncEditBadgeHitProxies`, `setLiveState`, `generate.md`, `doctor.md`, `impeccable/SKILL.md`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `live-browser.js` be split into smaller, more focused modules?**
  _Cohesion score 0.04771178188899708 - nodes in this community are weakly interconnected._
- **Why does `Commands` connect `impeccable/SKILL.md` to `initGlobalBar`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `modern-screenshot.umd.js` be split into smaller, more focused modules?**
  _Cohesion score 0.08897243107769423 - nodes in this community are weakly interconnected._
- **Why does `Init flow` connect `Init flow` to `new-work.md`, `initGlobalBar`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Should `el` be split into smaller, more focused modules?**
  _Cohesion score 0.05536568694463431 - nodes in this community are weakly interconnected._
- **Should `Intent` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
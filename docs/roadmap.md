# Roadmap

Versions are milestones, not fixed delivery dates. Only planning is complete.

| Milestone | Scope | Exit criteria |
| --- | --- | --- |
| v0.0.1 — Planning | Overview, requirements, stories, roadmap | Scope and open decisions documented |
| v0.1 — Foundation | GitHub repository, Expo TypeScript app, navigation, localization skeleton, theme tokens | App runs on iPhone; repository and CI baseline established |
| v0.2 — Nutrition core | Typed food models, manual logging, goals, dashboard and calculation tests using temporary local data | Add/edit/delete meals and see correct totals without AI |
| v0.3 — Backend | Express API, PostgreSQL, Prisma, account isolation, authentication, persistent diary and profile | Authorized records persist; API and integration tests pass |
| v0.4 — Recipes and history | Recipe CRUD, servings, custom categories, historical snapshots | Reuse recipes without rewriting past entries |
| v0.5 — AI assistant | Server-side OpenAI integration, structured drafts, confirmation, daily guidance, usage limits | Reviewable AI logging and graceful failure; secrets never shipped to mobile |
| v0.6 — Goals and polish | Calculated goals, weekly summaries, external food lookup if feasible, full Spanish/English coverage | Core requirements verified; assumptions and data sources documented |
| v1.0 — MVP | Security, privacy, accessibility, iOS/Android testing, deployment and portfolio demo | All High requirements pass; Medium requirements shipped or explicitly deferred |

## Future releases (tentative)

- v1.1: Nutrition label photo recognition and barcode scanning.
- v1.2: Shopping lists and meal planning.
- v1.3: Weight and physical progress history.
- v2.0: Training routines and workout tracking.
- Later: Apple Health and other wearable integrations.

## Working agreement

Create an Issue with requirement/story references and acceptance criteria before implementation. Branch from `develop` (once established), make small Conventional Commits, open a pull request, run checks and merge only after review. Promote stable milestones to `main` and tag releases. Keep a changelog once implementation begins. Use sample data rather than personal health records in screenshots or fixtures.

## Initial backlog for repository setup

1. Create public repository `SlowVictor/slowbuilder` (provisional name).
2. Add the planning documentation and commit it.
3. Set up GitHub Projects and initial Issues.
4. Configure branch workflow and initialize Expo with TypeScript.
5. Run the application on iOS and document setup; later test Android.

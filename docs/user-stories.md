# User stories and acceptance criteria

All criteria are proposed tests, not claims of implemented functionality.

| ID | User story | Requirements | Acceptance criteria |
| --- | --- | --- | --- |
| US-01 | As a user, I want to see remaining calories to understand my daily intake. | RF-04, RF-07 | Given a target of 2,200 kcal and confirmed meals totaling 1,485 kcal, show 715 kcal remaining. Editing or deleting a meal updates the total. Show an excess when above target. |
| US-02 | As a user, I want to see protein and other macros to follow my goals. | RF-04, RF-07 | Show consumed and target grams for protein, carbs and fat, with accessible labels and protein prominence. |
| US-03 | As a user, I want to describe a meal naturally instead of entering every food manually. | RF-14–17 | A description produces a structured draft; missing quantities prompt clarification or labeled assumptions. Nothing is saved until confirmation. |
| US-04 | As a user, I want to save and reuse recipes to reduce repetitive logging. | RF-10–12 | Save ingredients and individual nutrients, reopen the recipe and add it to a selected day/category. Editing or deleting the recipe leaves prior diary entries unchanged. |
| US-05 | As a user, I want to adjust recipe quantities to match what I eat. | RF-13 | Doubling a serving doubles its nutrient totals; overriding one ingredient updates the draft without changing the saved recipe unless requested. |
| US-06 | As a user, I want to review previous days and weekly summaries. | RF-09, RF-18 | Select a past date and see only its entries. Weekly summaries distinguish unlogged days from confirmed intake. |
| US-07 | As a user, I want to set my own goals or receive a calculated suggestion. | RF-03, RF-19, RF-22 | Manual targets work without physical inputs. Calculation uses the five agreed inputs and chosen goal, labels estimates and allows edits. |
| US-08 | As a user, I want to correct AI estimates before saving. | RF-16, RF-17 | Edit quantities and nutrients in a draft, recompute totals and confirm once. Retrying a failed save does not duplicate a meal. |
| US-09 | As a user, I want a private account to access my records. | RF-01, RF-02, RF-23 | Register, sign in/out and request account deletion. Another account cannot access my records. |
| US-10 | As a user, I want to log meals manually even without AI. | RF-05–08 | Enter food values and compatible units, choose a category, save, edit or delete the meal. Invalid values are rejected. |
| US-11 | As a user, I want flexible meal categories. | RF-06, RF-24 | Default categories exist; custom categories can be added, renamed and archived without losing historical entries. |
| US-12 | As a user, I want the app in Spanish or English. | RF-21 | Switching language updates navigation, labels and errors without changing stored data. AI replies follow the selected language. |
| US-13 | As a user, I want daily conversational follow-up to understand my progress. | RF-14 | The assistant uses authorized confirmed daily totals, distinguishes estimates, and offers general guidance without silently changing goals or logs. |
| US-14 | As a user, I want to search food data to avoid retyping labels. | RF-20 | Search returns matching foods with reference quantities and source; users can correct or manually enter values if no match exists. |

## Cross-cutting acceptance

Core workflows should be tested for invalid inputs, timezones, network errors, accessibility, localization and account isolation. AI integration tests should use mocks for deterministic behavior, with limited live smoke tests kept separate. Exact UI designs and endpoint contracts will be specified during implementation.

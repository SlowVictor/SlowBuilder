# Requirements

Baseline: 1.0 planning — 2026-11-27. High = required for MVP; Medium = planned for MVP but may be deferred with an explicit scope decision.

## Functional requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| RF-01 | Register a personal account. | High |
| RF-02 | Sign in and sign out securely. | High |
| RF-03 | Set and edit calorie, protein, carbohydrate and fat goals manually or using calculated suggestions. | High |
| RF-04 | Display daily consumed, target and remaining calories and macro progress; highlight protein. | High |
| RF-05 | Add foods manually with quantities and nutrient values. | High |
| RF-06 | Provide breakfast, lunch, snack and dinner categories and allow users to add custom categories. | High |
| RF-07 | Calculate nutrients from reference values and quantities; aggregate totals deterministically. | High |
| RF-08 | Edit and delete diary entries and recalculate totals. | High |
| RF-09 | View diary entries for previous dates. | High |
| RF-10 | Save recipes with ingredients, quantities and individual nutrients. | High |
| RF-11 | Edit and delete recipes without changing historical diary entries. | High |
| RF-12 | Add a saved recipe to a selected date and meal category. | High |
| RF-13 | Adjust ingredient quantities or serving counts and recalculate nutrients. | High |
| RF-14 | Provide a conversational AI assistant for daily follow-up and general nutrition guidance. | High |
| RF-15 | Interpret natural-language food descriptions and quantities; ask for missing information or explicitly label assumptions. | High |
| RF-16 | Display estimates, sources when known, and editable ingredients and nutrient values for review. | High |
| RF-17 | Save AI-generated entries only after explicit user confirmation. | High |
| RF-18 | Display weekly nutrient summaries and distinguish missing logs from zero intake. | Medium |
| RF-19 | Suggest goals from weight, height, age, sex and activity level for fat loss, maintenance or muscle gain; explain assumptions and allow overrides. | High |
| RF-20 | Search an external nutrition database when available. | Medium |
| RF-21 | Allow users to switch between Spanish and English. | High |
| RF-22 | Update physical profile and selected goal without requiring disclosure for manual tracking. | High |
| RF-23 | Allow users to delete their account and associated personal data, subject to documented retention obligations. | High |
| RF-24 | Allow users to rename or archive custom meal categories while preserving historical entries. | High |

## Non-functional requirements

| ID | Requirement |
| --- | --- |
| RNF-01 | Support iOS and Android; test on both platforms before claiming compatibility. |
| RNF-02 | Use readable contrast, accessible controls and text labels rather than color alone. |
| RNF-03 | Persist confirmed records and protect historical snapshots. |
| RNF-04 | Use HTTPS outside local development and validate API requests. |
| RNF-05 | Keep secrets server-side; use secure password hashing or managed authentication; authorize each private resource by owner. |
| RNF-06 | Keep mobile, business logic, persistence and external integrations modular. |
| RNF-07 | Use TypeScript with strict typing and runtime validation at trust boundaries. |
| RNF-08 | Maintain English technical documentation and localized user-facing strings. |
| RNF-09 | Track changes through Git, focused commits and pull requests. |
| RNF-10 | Automate nutrition arithmetic, authorization and key workflow tests. |
| RNF-11 | Handle network and AI failures with actionable errors; avoid duplicate entries on retries. |
| RNF-12 | Minimize personal data, explain AI processing and define retention/deletion; never commit real personal logs or credentials. |
| RNF-13 | Clearly distinguish estimates from label/database values. |
| RNF-14 | Keep basic manual logging usable if AI is unavailable; bound AI request usage and cost. |
| RNF-15 | Treat guidance as general adult wellness, not diagnosis or treatment; avoid unsafe targets and compensatory advice. |
| RNF-16 | Use locale-aware dates, units and number formatting; retain precision internally and round for display. |

## Calculation rules

For each nutrient, multiply the nutrient value per reference quantity by the consumed quantity divided by the reference quantity. Units must be compatible; milliliters must not be converted to grams without a valid density or matching volume-based nutrition record. Sum ingredients to obtain meal and daily totals. Use declared energy values where available rather than forcing calories to match macro-derived energy. Validate nonnegative quantities and values; display over-target intake accurately without negative progress bars. Calculated goals are estimates, not prescriptions; formulas and safety limits must be documented and tested before release.

## Out of scope

Training plans, shopping lists, barcode scanning, image-based meal or label recognition, wearable integrations, medical nutrition advice, and recipe preparation instructions.

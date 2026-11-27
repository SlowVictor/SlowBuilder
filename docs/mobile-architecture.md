# Mobile Architecture

## Overview

The SlowBuilder mobile application follows a modular, layered architecture designed to promote maintainability, scalability, separation of concerns and code reusability.

The application is built using React Native, Expo and TypeScript.

## Directory Structure

```text
mobile/
├── assets/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── i18n/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── theme/
│   ├── types/
│   └── utils/
├── App.tsx
├── index.ts
└── package.json
```

## Directory Responsibilities

| Directory | Responsibility |
|---|---|
| components | Reusable user interface components. |
| context | Shared application state. |
| hooks | Reusable React logic and custom hooks. |
| i18n | Internationalization and translation resources. |
| navigation | Navigation configuration and screen transitions. |
| screens | Application screens and their composition. |
| services | Communication with backend services and external APIs. |
| theme | Design tokens, colors, typography and spacing. |
| types | TypeScript interfaces and type definitions. |
| utils | Reusable utility functions. |
| assets | Images, icons and static resources. |

## Application Entry Point

The App.tsx file acts as the root component of the mobile application.

Its responsibility is to initialize global configuration, providers and navigation rather than contain complete screen implementations.

## Architectural Principles

- Separation of concerns.
- Reusable components.
- Type safety.
- Modular development.
- Consistent naming conventions.
- Centralized design tokens.
- Internationalization support.
- Separation between presentation and business logic.

## Naming Conventions

- Components and screens: PascalCase.
- Functions and variables: camelCase.
- Custom hooks: camelCase with the use prefix.
- Directories: lowercase.
- Source code and technical documentation: English.

## Current Implementation

The provisional welcome screen has been extracted from App.tsx into src/screens/WelcomeScreen.tsx.

The root component delegates the screen rendering to WelcomeScreen while maintaining global status bar configuration.

Empty directories are preserved using .gitkeep files until their respective functionality is implemented.

## Future Evolution

The architecture will progressively incorporate navigation, internationalization, nutritional tracking, authentication, API integration, recipe management and AI-powered features.

Architectural decisions will be reviewed as the application grows.

## Related Issue

#9 — Configure mobile project structure.
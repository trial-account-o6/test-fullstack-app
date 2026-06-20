# Monorepo Architecture Overview

This repository is structured as a Turborepo monorepo, designed to host multiple applications and shared packages within a single codebase. This approach enhances code organization, promotes reusability, and optimizes build performance through Turborepo's intelligent caching and parallel execution capabilities.

## Key Architectural Principles

-   **Workspaces:** The monorepo is managed using pnpm workspaces, which allows for efficient dependency management and linking of internal packages.
-   **Task Orchestration:** Turborepo orchestrates build, test, and lint tasks across the entire monorepo, ensuring that only affected projects are rebuilt and leveraging a shared cache.
-   **Code Colocation:** Related applications (`apps/`) and shared code (`packages/`) are colocated, simplifying development and maintenance.

## Monorepo Structure

### `apps/` Directory

This directory contains standalone applications that are part of the monorepo.

-   **`apps/web/`**: The frontend application. This is typically a client-side application (e.g., React, Next.js) responsible for the user interface.
-   **`apps/api/`**: The backend application. This usually exposes APIs consumed by the frontend or other services.

### `packages/` Directory

This directory contains reusable code, utilities, and components that can be shared across multiple applications or other packages within the monorepo.

-   **`packages/shared/`**: Contains common interfaces, types, and utility functions (e.g., `logger`) that both `apps/web` and `apps/api` can import and use. This promotes consistency and reduces code duplication.

## Inter-package Communication

Applications (`apps/web`, `apps/api`) consume code from shared packages (`packages/shared`) using relative import paths. This allows for direct access to shared functionalities without redundant installations.

## Build and Development Workflow

Turborepo streamlines the development workflow:

-   **Incremental Builds:** Only projects with changed files or un-cached outputs are rebuilt.
-   **Distributed Caching:** Build artifacts can be cached locally and remotely, speeding up CI/CD pipelines.
-   **Parallel Task Execution:** Tasks across different projects can run in parallel, fully utilizing available resources.

For specific development commands, refer to the root `README.md` file.
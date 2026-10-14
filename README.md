# TypeTasks — Part 1: Typed Model

A TypeScript-only model layer for the TypeTasks assignment. There is no UI in this part.

## Included operations

- `addTask(tasks, title)`: appends a new `todo` task with an unused positive integer ID.
- `completeTask(tasks, id)`: returns a new array with the matching task marked `done`.
- `filterByStatus(tasks, status)`: filters by the `TaskStatus` union.
- `advanceTask(tasks, id)`: extra original operation; advances `todo` → `in-progress` → `done`.

All operations avoid mutating the input array.

## Type-check

```bash
npm install
npm run typecheck
```

Or, with TypeScript installed globally:

```bash
tsc
```

`strict` mode is enabled in `tsconfig.json` and `noEmit` keeps this part focused on type-checking.

## Negative type checks to try locally

Temporarily add these cases to a `.ts` file included by `tsconfig.json`; each should be rejected by TypeScript, then remove them before committing:

```ts
import { filterByStatus, type Task } from "./model";

// @ts-expect-error — required property `status` is missing
const missingStatus: Task = { id: 1, title: "Study" };

// @ts-expect-error — `id` must be a number
const stringId: Task = { id: "3", title: "Study", status: "todo" };

// @ts-expect-error — "finished" is not a TaskStatus
filterByStatus([], "finished");
```

The `@ts-expect-error` comments make the probe file compile only when TypeScript detects the expected errors; remove the whole probe file after testing.

## Branch and pull request

First, create an **empty public GitHub repository** named `TypeTasks` (do not initialize it with a README, license, or `.gitignore`). From this project folder, run:

```bash
git init -b main
git add .gitignore
git commit -m "Initialize TypeTasks repository"
git checkout -b part-1-model
git add model.ts tsconfig.json package.json README.md
git commit -m "Build typed TypeTasks model"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
git push -u origin part-1-model
```

Replace the remote URL with your repository's URL. Then open a pull request from `part-1-model` into `main` on GitHub and submit that PR URL. The local compile check does not itself create a GitHub PR.

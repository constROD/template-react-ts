# Rules

## Naming conventions

- `kebab-case` - for all folders/files.
- `UPPER_CASE` - for constants.
- `PascalCase` - for classes and types.
- `snake_case` - for database tables and columns.
- `camelCase` - for functions and etc.

## Folder structure

- `src` - main source code.
- `src/pages` - page routes (e.g. `login`, `register`, `dashboard`).
- `src/modules` - modules (e.g. `login`, `register`, `dashboard`).
- `src/shared` - shared code (e.g. `utils`, `constants`, `types`, `hooks`).

## Steps to create a new module

1. Create a property in `src/shared/constants/commons.ts` for the page `route` constant (look for `ROUTES`).
2. Create a folder called `module-name` in `src/modules`.
3. Create a folder called `components` in `src/modules/<module-name>`.
4. Create a new files `constants.ts`, `helpers.ts`, `hooks.ts`, `services.ts`, `types.ts` and `validations.ts` in `src/modules/<module-name>`.
5. Create a new file `index.ts` in `src/modules/<module-name>` and export all the `src/modules/<module-name>/components/*` files.
6. Create a new file in the `src/pages` folder with the same name as the `route` constant in `src/shared/constants/commons.ts` and import the module.

## Pattern Summary

1. `src/shared/constants/commons.ts` - for routes constant.
2. `src/modules/<module-name>`
3. `src/pages/<page-name>`

# Template React TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.
- Install **node** >= 16.13.0
- Install **pnpm** >= 7.17.0

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
$ nvm use or nvm use 16.13.0
```

## Without Docker

- Install dependencies.

```bash
$ pnpm i
```

- Create `.env` file for environment variables. `.env-sample` are the required environment variables.
- Run in **development** mode.

```bash
$ pnpm dev
```

- Run in **production** mode.

- Build the application.

```bash
$ pnpm build
```

- and serve the generated `build` folder to the server.

## With Docker

- Run in **development** mode.
- Build container.

```bash
$ docker compose build or pnpm docker:local build
```

- Start the container.

```bash
$ docker compose up -d or pnpm docker:local up -d
```

- Stop the container.

```bash
$ docker compose down or pnpm docker:local down
```

- Access the container.

```bash
$ docker exec -it <repository-name>-web-1 bash
```

- Once you're already inside the container.
- Install dependencies and run the application.

```bash
$ pnpm dev
```

- Run in **production** mode.
- Build container.

```bash
$ docker compose -f docker-compose.prod.yaml build or pnpm docker:prod build
```

- Start the container.

```bash
$ docker compose -f docker-compose.prod.yaml up -d or pnpm docker:prod up -d
```

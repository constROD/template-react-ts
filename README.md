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

- Create `.env` file and refer to `.env-sample` file for the required secrets.

## Without Docker

- Install dependencies.

```bash
$ pnpm i
```

**Development Mode:**

```bash
$ pnpm dev
```

**Production Mode:**

- Build the application.

```bash
$ pnpm build
```

- and serve the generated `build` folder to the server.

# With Docker

**Development Mode:**

- Build container.

```bash
$ docker compose build or pnpm docker:local build # Build with cache
```

```bash
$ docker compose build --no-cache or pnpm docker:local build --no-cache # Build with no cache
```

- Run container.

```bash
$ docker compose up or pnpm docker:local up # Run in foreground
```

```bash
$ docker compose up -d or pnpm docker:local up -d # Run in background
```

- Shutdown container.

```bash
$ docker compose down or pnpm docker:local down # Remove without volumes
```

```bash
$ docker compose down -v or pnpm docker:local down -v # Remove with volumes
```

**Production Mode:**

- Build container.

```bash
$ docker compose -f docker-compose.prod.yaml build or pnpm docker:prod build # Build with cache
```

```bash
$ docker compose -f docker-compose.prod.yaml build or pnpm docker:prod build # Build with no cache
```

- Run container.

```bash
$ docker compose -f docker-compose.prod.yaml up or pnpm docker:prod up # Run in foreground
```

```bash
$ docker compose -f docker-compose.prod.yaml up -d or pnpm docker:prod up -d # Run in background
```

- Shutdown container.

```bash
$ docker compose -f docker-compose.prod.yaml down or pnpm docker:prod down # Remove without volumes
```

```bash
$ docker compose -f docker-compose.prod.yaml down -v or pnpm docker:prod down -v # Remove with volumes
```

**Access the container:**

```bash
$ docker exec -it <container_name> bash
```

```bash
$ docker logs <container_name>
```

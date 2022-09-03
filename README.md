# Template React TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.
- Install **node** >= v16.13.0

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
$ yarn setup
```

- Install Dependencies.

```bash
$ yarn or yarn install
```

- Create `.env` file for environment variables. `.env-sample` are the required environment variables.
- Run in **development** mode.

```bash
$ yarn dev
```

## Run in production mode.

- **without Docker:**

- Build the application.

```bash
$ yarn build
```

- Run in **production** mode.

```bash
$ yarn start
```

- **with Docker:** Download `Docker` in your machine or server.

- Build the application.

```bash
$ docker build -t {image_name} .
```

- Run in **development/production** mode.

```bash
$ docker run -d -p {machine_port}:80 --name {container_name} {image_name}
```

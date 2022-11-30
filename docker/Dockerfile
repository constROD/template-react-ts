FROM node:16-buster-slim

# Go to /home/dev/app directory.
WORKDIR /home/dev/app

RUN chown -R node /home/dev
USER node

# Environment for npm and pnpm.
ENV NPM_CONFIG_PREFIX=/home/dev/.npm
ENV PATH=$PATH:/home/dev/.npm/bin
ENV PNPM_HOME=/home/dev/.pnpm
ENV PATH="${PNPM_HOME}:${PATH}"

# Install pnpm globally.
RUN npm i -g pnpm@7.17.0

# Copy all required files for installation.
COPY package.json /home/dev/app

# Install dependencies.
RUN pnpm i

CMD ["pnpm", "dev"]

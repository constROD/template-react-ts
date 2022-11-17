FROM node:16-alpine3.14 AS builder

# Environment Variables
ARG APP_ENV
ENV APP_ENV=${APP_ENV}

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY vite.config.ts vite.config.ts
COPY tsconfig.json tsconfig.json
COPY tsconfig.node.json tsconfig.node.json
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY src src
COPY index.html index.html

# Install dependencies and build the application.
RUN echo ${APP_ENV} | base64 -d >.env
RUN yarn && yarn build

FROM nginx:1.19.6-alpine

# Copy build folder from --builder or /app.
COPY --from=builder /app/build/ /usr/share/nginx/html

# Delete nginx server default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx/nginx.conf file from the nginx folder of the repository.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Set PORT to 80
EXPOSE 80

# Start the application.
CMD ["nginx", "-g", "daemon off;"]

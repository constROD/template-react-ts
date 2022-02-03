FROM node:16-alpine3.14 AS builder

ENV SKIP_PREFLIGHT_CHECK=true

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY src src
COPY public public

# Install dependencies and build the application.
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
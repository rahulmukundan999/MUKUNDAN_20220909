FROM node:16.14.0 AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

ARG REACT_APP_GRAPHQL_URL
ENV REACT_APP_GRAPHQL_URL $REACT_APP_GRAPHQL_URL

RUN echo "$GRAPHQL_URL"
# Copy app files
COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:latest
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY ./nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
FROM node:16-alpine
WORKDIR /app
# Copy app files
COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 80
CMD [ "npx", "serve", "build" ]
# Setup and build the client

FROM node:8-alpine AS client

# Create app directory
WORKDIR /app/client/
COPY client/package*.json client/yarn.lock ./
RUN yarn install --production
COPY client/ ./
RUN npm run build


# Setup the server
FROM node:8-alpine
WORKDIR /app/
COPY --from=client /app/client/build/ ./client/build/
WORKDIR /app/server/
COPY server/package*.json server/yarn.lock ./
RUN yarn install --production
COPY server/ ./

EXPOSE 3005

CMD ["npm", "run" , "start:prod"]



FROM node:22.18.0-alpine

COPY . .

# Runs linting and unit tests for the release package
RUN npm i && npm run lint && npm test

# Runs example package to test the import and instantiation of release package
WORKDIR /example
RUN npm i && npm start

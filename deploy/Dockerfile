FROM node:22.18.0-alpine

COPY . .

RUN npm i && npm run lint && npm test

# Runs example package to test the import and instantiation
RUN npm start

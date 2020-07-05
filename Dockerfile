FROM node:stretch-slim

COPY dist dist
COPY node_modules node_modules
COPY package*.json ./
COPY database.sqlite .

RUN npm i sqlite3

ENTRYPOINT ["npm", "run", "start:prod"]

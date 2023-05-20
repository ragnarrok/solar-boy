# syntax=docker/dockerfile:1

FROM node:19-alpine
WORKDIR /solar-boy
COPY . .
RUN yarn install --production
CMD ["node", "index.js"]
EXPOSE 8067
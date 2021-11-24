FROM node:15.14.0

RUN mkdir -p /usr/src/sportsstore

COPY dist/SportsStore /usr/src/sportsstore/dist/SportsStore
COPY ssl /usr/src/sportsstore/ssl

COPY authMiddleware.js /usr/src/sportsstore/
COPY serverdata.json /usr/src/sportsstore/
COPY server.js /usr/src/sportsstore/server.js
COPY deploy-package.json /usr/src/sportsstore/package.json

WORKDIR /usr/src/sportsstore

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
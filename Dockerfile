FROM readytalk/nodejs
WORKDIR /app

ADD package.json /app/
RUN npm install
VOLUME /app

ENTRYPOINT ["npm", "start"]

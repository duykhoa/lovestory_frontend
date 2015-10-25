FROM readytalk/nodejs
WORKDIR /app

ADD package.json /app/
RUN npm install
VOLUME /app

RUN echo "test" > /app/greet.html
ENTRYPOINT ["/nodejs/bin/node", "index.js"]

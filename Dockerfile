
FROM node:lts-alpine as base

# for mozjpeg
run apk --update --no-cache add autoconf automake \
    libtool make tiff jpeg zlib zlib-dev pkgconf \
    nasm file gcc musl-dev

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

ADD --chown=node:node package.json .

RUN npm i

USER node

ADD --chown=node:node . .

CMD while true; do npm start; sleep 1; done

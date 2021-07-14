
FROM node:lts-alpine as base

# for mozjpeg
run apk --update --no-cache add autoconf automake \
    libtool make tiff jpeg zlib zlib-dev pkgconf \
        nasm file gcc musl-dev

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

ADD --chown=node:node package.json .

RUN npm i

RUN npm i -g sass-migrator && sass-migrator division **/*.scss

#RUN npm install react-bootstrap bootstrap@4.6.0 --save

#RUN npm i -s sass@1.32

#RUN cp package.json package.json.bak

ADD --chown=node:node . .

USER node

CMD npm start

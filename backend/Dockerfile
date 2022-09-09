FROM node:16.14.0
RUN apt-get -y update
RUN apt-get install -y ffmpeg

WORKDIR /app

COPY ["package.json", "yarn.lock","./"]

RUN ls
RUN yarn install
RUN yarn add typescript -g
COPY . .


CMD ["yarn","start"]
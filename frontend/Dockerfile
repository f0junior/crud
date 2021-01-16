FROM node:15.5.1-alpine
COPY ./frontend /crud
WORKDIR /crud
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000
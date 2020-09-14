FROM node:12

WORKDIR /app

COPY . .

ENV NODE_ENV=production
RUN npm install

EXPOSE ${PORT}

CMD ["npm", "run", "production"]

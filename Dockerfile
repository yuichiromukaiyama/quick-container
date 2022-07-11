FROM node:16.15

COPY . /app/
WORKDIR /app/
RUN npm install
EXPOSE 3000 3000
CMD ["npm", "run", "start"]

FROM  node:22-alpine

#set working directory..
WORKDIR /app

#copy .json file...
COPY package*.json ./
RUN npm install


#copy rest of the code..
COPY . .

EXPOSE 8000



#START THE BACKEND SERVER..
CMD ["nodemon","app.js"]
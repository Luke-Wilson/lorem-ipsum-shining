FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

# Expose the port that you want to use. (In our case it
# should match the port specified in the server.js file).
# Note: EXPOSE is ignored by Heroku and instead uses the $PORT variable
EXPOSE 3004

# Finally, run 'npm start'
CMD [ "npm", "start"]

FROM node:6.10.3
 
# Create app directory
RUN mkdir  /portal-docker
WORKDIR /portal-docker
 
# Install app dependencies
COPY package.json /portal-docker
RUN npm install
 
# Bundle app source
COPY . /portal-docker
 
EXPOSE 8080
CMD [ "npm", "start" ]
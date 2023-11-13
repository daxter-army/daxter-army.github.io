# All Dockerfiles start from a parent or base image
FROM node:18-alpine

# Sets the base directory for all our commands
# Now . will represent /app
# But we can also use the full path in our commands
WORKDIR /app

# Our code is not automatically inserted in the docker container,
# We have to explicitly COPY and PASTE it inside it.
# This is executed on HOST side
# Trailing / is important to tell docker, to create new dir, if it is not existing 
# COPY package.json /app/
# COPY tsconfig.json /app/
# COPY src /app/src/
# COPY public /app/public/
COPY package.json ./
COPY tsconfig.json ./
COPY public ./public/
COPY src ./src/

# This is executed in the container
RUN npm install

# Expose this port from container to outer OS,
# Well this does not mean anything, more like a documentation thing,
# For exposing it to outer OS, we have to specify -p in the docker run command
# EXPOSE 3000
# Final command to run, to start the application inside the docker container
CMD ["npm", "run", "start"]

# ENV REACT_APP_NAME=value
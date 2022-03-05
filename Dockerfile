FROM node:16-alpine

WORKDIR /src/app

# Install App Dependencies
COPY package*.json ./
RUN npm install

# Bundle Source Files
COPY . .

# Build the Project
RUN npm run build

# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]

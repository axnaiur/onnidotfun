# Use official Node LTS as the base
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./
RUN yarn install

# Copy source
COPY . .

# Build (if you have a build step)
# RUN yarn build

# Expose your backend port
EXPOSE 4000

# Start the server
CMD ["yarn", "start"]

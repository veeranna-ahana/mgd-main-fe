# Use a smaller base image for building
FROM node:16-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Use a smaller base image for the production image
FROM nginx:alpine

# Remove default Nginx configurations
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the builder stage to the nginx public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the default port for nginx (usually 80)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
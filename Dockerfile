# Step 1: Use the official Node.js image from the Docker Hub
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the port that React app will run on
EXPOSE 3000

# Step 7: Define the command to run the app
CMD ["npm", "start"]

// Importing necessary modules and files
import app from "./src/app"; 
import MongoConnection from "./src/database/connection"; 
require("dotenv").config();

// Getting port number from environment variables or defaulting to an empty string if not defined
const port: string = process.env.port || "";

// Getting MongoDB connection URL from environment variables or defaulting to an empty string if not defined
const mongoUrl: string = process.env.mongo_url || "";

// Creating a new MongoDB connection instance using the 'MongoConnection' class
const dbConnection = new MongoConnection(mongoUrl);

// Establishing a connection to the MongoDB database
dbConnection.connect();

// Event listener for the 'ready' event of the 'app' object
app.on("ready", () => {
  // Starting the server and listening on the specified port
  app.listen(process.env.port, () => {
    console.log("Server running in port " + port);
  });
});
// Import necessary modules and the Express app from '../index.ts'
import app from '../app';
import mongoose, { ConnectOptions } from 'mongoose';

// Define a class for handling MongoDB connections
class MongoConnection {
    private mongoUrl: string;

    // Constructor to initialize the MongoDB connection URL
    constructor(mongoUrl: string) {
        this.mongoUrl = mongoUrl;
    }

    // Method to establish a connection to the MongoDB database
    connect(): void {
        console.log("Connecting to the database...");

        // Configure Mongoose connection options
        const mongooseOptions: ConnectOptions & { useNewUrlParser: boolean; useUnifiedTopology: boolean } = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Establish the connection to the MongoDB database
        mongoose
            .connect(this.mongoUrl, mongooseOptions)
            .then(() => {
                console.log("Connection to the database established successfully");
                
                // Emit a 'ready' event using the Express app instance
                app.emit('ready');
            })
            .catch((e: Error) => console.log(e));
    }
}

// Export the MongoConnection class for use in other parts of the application
export default MongoConnection;
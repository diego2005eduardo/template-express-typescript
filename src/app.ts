// Import necessary modules and packages
import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";

import exampleRouter from "./routes/exampleRoutes"

// Define a whitelist of allowed origins
const whiteList: string[] = ["http://localhost:3000"];

/* --- NOT WORKING, I'M TOO LAZY TO FIX IT --- 

Configure CORS options 
const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || whiteList.includes(origin)) {
            // If the origin is in the whitelist, allow the request
            callback(null, true);
        } else {
            // If the origin is not in the whitelist, deny the request with an error message
            callback(new Error('[API] Not allowed by CORS'));
        }
    },
};*/

// Define a class for the Express application
class App {
    public app: Express;

    // Constructor for initializing
    constructor() {
        this.app = express();
        this.middlewares(); // Call middleware setup method
        this.routes(); // Call route setup method
    }

    // Method to set up middlewares
    middlewares(): void {
        //this.app.use(cors(corsOptions)); // Enable CORS using the configured options
        this.app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
        this.app.use(express.json()); // Parse JSON bodies
    }

    // Method to set up routes
    routes(): void {
        this.app.use(exampleRouter); // Use the routes defined in exampleRouter module
    }
}

// Export an instance of the Express app created from the App class
export default new App().app;
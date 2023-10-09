// Import necessary modules and types from 'express'
import { Request, Response } from 'express';

// Define a class for the home controller
class ExampleController {
    // Method to handle GET and POST requests to the route
    async index(req: Request, res: Response) {
        // Send a response with status code 200 and a message
        res.status(200).send('[API] API Working'); 
    }
}

// Export an instance of the ExampleController class
export default new ExampleController();
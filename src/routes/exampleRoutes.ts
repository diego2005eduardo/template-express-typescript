// Import the necessary modules and controllers
import express from 'express';
import ExampleController from '../controllers/ExampleController';

// Create a new Express Router instance
const router = express.Router();

// Define a route for handling POST requests at the root path ('/')
router.post('/', ExampleController.index);

// Export the router
export default router;
import express from 'express';

// Creating an Express application
const app = express();

// Defining the port number. It will use the port specified in the environment variable PORT, or default to 5000 if the environment variable is not set.
const PORT = process.env.PORT || 5000;

// Starting the Express server to listen on the specified port
app.listen(PORT, () => {
  // Logging a message to the console indicating that the server is running and listening on the specified port
  console.log(`Server listening on port ${PORT}`);
});
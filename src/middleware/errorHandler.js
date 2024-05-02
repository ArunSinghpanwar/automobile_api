export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
  
    // Check if the error is a known error (e.g., Mongoose validation error)
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
  
    // Default error response for other types of errors
    res.status(500).json({ message: 'Internal Server Error' });
  };
  
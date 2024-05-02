import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from "./routes/authRoutes.js"
import employeeRoutes from './routes/employeeRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/employee', employeeRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import { getAllEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes protected by authentication middleware
router.get('/getlist', authMiddleware, getAllEmployee);
router.post('/create', authMiddleware, createEmployee);
router.put('/update', authMiddleware, updateEmployee);
router.delete('/delete', authMiddleware, deleteEmployee);

export default router;

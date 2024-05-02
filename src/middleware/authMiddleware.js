import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header is missing or invalid' });
  }
const secretKey= process.env.JWT_SECRET
  const token = authHeader.split(' ')[1];
try {
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.userId;

    const findUser = await user.findById(userId);
    if (!findUser) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = findUser; // Attach user object to request for further use
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;

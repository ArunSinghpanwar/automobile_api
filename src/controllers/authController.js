import user from '../models/user.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// Register a new user


export const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const findUser = await user.findOne({ username });
    if (!findUser) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

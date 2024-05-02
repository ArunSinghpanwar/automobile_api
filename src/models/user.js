import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
    match: /^[a-zA-Z0-9_-]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
}, { timestamps: true });



userSchema.index({ username: 1 });

export default mongoose.model('User', userSchema);

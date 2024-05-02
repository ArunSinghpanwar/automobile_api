import mongoose from 'mongoose';
import encrypt from "mongoose-encryption"
import dotenv from 'dotenv';
dotenv.config();


const employeeSchema = new mongoose.Schema({
  employee_name: {
    type: String,
    required: true
  },
  employee_email: {
    type: String,
    required: true,
    unique: true
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  updatedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
});


  const   secret=process.env.ENCRYPTION_SECRET
 
  employeeSchema.plugin(encrypt, { secret: secret,encryptedFields: ['employee_name', 'employee_email'] });



employeeSchema.index({ encryptedName: 'text', encryptedEmail: 'text' });
const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;

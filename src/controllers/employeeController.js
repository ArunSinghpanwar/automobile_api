import Employee from "../models/employee.js";
export const createEmployee = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEmployee = new Employee({ employee_name:name, employee_email:email, createdBy: req.user._id, });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create employee', error: error.message });
  }
};
export const getAllEmployee = async (req, res) => {
  try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { name, email } = req.body;
        const bookId = req.query.id;
        const findemployee = await Employee.findById(bookId);
        if (!findemployee) {
          return res.status(404).json({ message: 'Book not found' });
        }    
        findemployee.employee_name = name;
        findemployee.employee_email = email;
        findemployee.updatedBy = req.user._id; 
        await findemployee.save();
        res.status(200).json(findemployee);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

export const deleteEmployee = async (req, res) => {
  try {
    const findemployee = await Employee.findById(req.query.id);
    if (!findemployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await findemployee.deleteOne();
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

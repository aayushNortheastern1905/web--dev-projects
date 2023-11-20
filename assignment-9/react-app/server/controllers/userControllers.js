const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {
  validateFullName,
  validateEmail,
  validatePassword,
} = require('../middlewares/validationMiddleware'); 

const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!validateFullName(fullName) || !validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({ message: 'Invalid email or password or fullname' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.log("error",error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const editUser = async (req, res) => {

  const { email, fullName, password } = req.body;
  
  if (!email || !validateFullName(fullName) || !validatePassword(password)) {
    return res.status(400).json({ message: 'Invalid email, full name, or password' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { fullName, password: hashedPassword } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteUser = async (req, res) => {
 
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  try {
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {

  try {
    const users = await User.find({}, { fullName: 1, email: 1, password: 1 });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// // Example implementation in userController.js assuming you have the necessary routes and logic

// const login = async (req, res) => {
//   const { email, password } = req.query;

//   try {
//     // Check if a user exists with the provided email and password
//     const user = await User.findOne({ email, password });

//     if (user) {
//       // User with provided credentials exists
//       res.json({ message: 'Login successful', user });
//     } else {
//       // No user found with the provided credentials
//       res.status(401).json({ message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };




module.exports = {
  createUser,
  editUser,
  deleteUser,
  getAllUsers,
  // login,
};

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers'); 

// User Creation
router.post('/create', userController.createUser);

// User Edit
router.put('/edit', userController.editUser);

// User Delete
router.delete('/delete', userController.deleteUser);

// Get all users
router.get('/getAll', userController.getAllUsers);

// router.get('/login/?email=${email}&password=${password}',userController.login)

module.exports = router;

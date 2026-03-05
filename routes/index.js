const express = require ('express');
router = express.Router();
const productController = require('../controller/productController');


//route to get all users
router.get('/products', productController.getAllProducts);
//Route to serach ID
// router.get('/users/:id', userController.getUserById);
// //Route to search gender
// router.get('/users/:gender', userController.getUserByGender);


//Route to create new user
router.post('/add', productController.addProduct);
// router.put('/users', userController.updateUser);

//router delete user

// router.delete('/users', userController.deleteUser);
module.exports=router;

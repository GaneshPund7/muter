const express = require('express');
const { getUser, 
     addUser,
     updateUser, 
     deleteUser,
     forgetPassword, 
     verifyOtp, 
     updatePassword } = require('./user.controller');
const verifyUser = require('../user-login/user.login');
const route = express.Router();

route.get('/user', getUser);
route.post('/user', addUser);
route.put('/user/:id', updateUser);
route.delete('/user/:id', deleteUser);

route.get('/login', verifyUser);
route.post('/forgot-password', forgetPassword);
route.post('/verify-otp', verifyOtp);
route.post('/update-password', updatePassword);
module.exports = route;

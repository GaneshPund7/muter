const express = require('express');
const { getUser, 
     addUser,
     updateUser, 
     deleteUser,
     forgetPassword, 
     verifyOtp, 
     updatePassword, 
      } = require('./user.controller');
      const {verifyToken} = require('./user.service')
const verifyUser = require('../auth/user-login/user.login');
const route = express.Router();

route.get('/user', getUser);
route.post('/user', addUser);
route.put('/user/:id', updateUser);
route.delete('/user/:id', deleteUser);

route.post('/login', verifyUser);
route.post('/forgot-password', forgetPassword);
route.post('/verify-otp', verifyOtp);
route.post('/update-password', updatePassword);

route.get('/verifyToken', verifyToken ,(req, res)=>{
res.send("You can access this properties")
});

module.exports = route;

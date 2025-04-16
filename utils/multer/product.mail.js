const nodemailer = require('nodemailer');
const { sendMail } = require('../nodemailer/sendMail');

 const createTransport = nodemailer.createTransport({
    service: "",
    secure: "",
    port:"",
    host:"",
    auth:{
        user: "",
        pass:""

    }
 })
 

 let email= [
    "gamesh@gmail.com",
    "grajesh@gmail.com"
 ]
 
  async function sendMail() {
      await createTransport.sendMail({
        to:email.join(','),
        from:"",
        subject:"",
        html:"",

    })
    
  }
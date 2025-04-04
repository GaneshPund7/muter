const express = require('express');
// const {  = require('./user/user.controller');
const {filename} = require('./multer/addharcard');
const  {sendMail} = require('./nodemailer/sendMail.js');
const router = express.Router();

router.get('/data', async (req, res)=>{
     
    res.send("Data fetch successful..!");
})

router.post('/multer', filename, async(req, res)=>{
     
        res.status(200).json({file: "File Uploaded Successfuly"})
    // }else{
    //     res.status(404).json({message: "Somthing went wrong"})
        
    // }

})


router.post('/send-mail', sendMail, (req, res)=>{
    
    return res.send("Mail sended successfully");
});

module.exports = router;
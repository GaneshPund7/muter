const userSchema = require('./user.modal');
async function checkAge(req, res, next) {

const { age } = req.query;

    if( age < 18){
          res.status(400).json({Message :"Your age is not able to access this service"})   
        
    }else if(age > 18 && age < 40){
          res.status(200).json({Message: "Congratulation you are applicable for this service...!"});
        
    }else if(age > 40){
        res.status(200).json({Message: "Your Old man dont do this",arr:[4,2]})
    }
    next()
}

exports.getUser = async((req, res)=>{
 
        const get_user = userSchema.find();
        

    
    
   
})

 module.exports = {checkAge};
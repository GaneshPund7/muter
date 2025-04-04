const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userName: {
        type : String,
        required: true,
        unique: false
    },
    email:{
         type: String, 
         required: true,
          unique: true
    },
    password: { 
        type: String,
         required: true, 
        
    }
}
,{
    timestamps: true
})
module.exports = mongoose.model('localData', userSchema);
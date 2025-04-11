const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    adminName: {
        type: String,
        required: true,
        unique: false
    },
    adminEmail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}
    , {
        timestamps: true
    })
module.exports = mongoose.model('adminData', userSchema);

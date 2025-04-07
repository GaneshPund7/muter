const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
    }
})
module.exports = mongoose.model('verifyOtp', otpSchema);
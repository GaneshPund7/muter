const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: false
    },
    price: {
        type: String,
        required: true,
    },
    productQuantity: {
        type: String,
        required: true,
    },
    
}
    , {
        timestamps: true
    })
module.exports = mongoose.model('product-details', productSchema);

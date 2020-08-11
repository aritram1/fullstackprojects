const mongoose = require('mongoose');
const ProductSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    name: {type : String, required: true},
    price: {type: Number, required: true}
}
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
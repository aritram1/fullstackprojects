const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ProductSchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {type : String, required: true},
        price: {type: Number, required: true}
    },
    { 
        timestamps: { createdAt: 'created_at' } 
    });
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
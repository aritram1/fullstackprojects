const mongoose = require('mongoose');
const Product = {
    _id: mongoose.Schema.Types.ObjectId,
    name: String
}
module.export = Product;
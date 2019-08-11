import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    productType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', productSchema);
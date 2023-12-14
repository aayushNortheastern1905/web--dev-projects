const mongoose = require('mongoose')

const sneakerSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    modelName: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    availableSizes: {
        type: [Number],
        required: true,
    },
    assets: {
        img: [String],
        vid: [String],
        mtl: [String],
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    ankleType: {
        type: String,
        required: true
    },
    marketPrice: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: String,
        default: '12-09-2023'
    },
    priceHistory: [
        {
            date: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
        },
    ],
}, {
    timestamps: true
})

const Sneaker = mongoose.model('Sneaker', sneakerSchema);

module.exports = Sneaker
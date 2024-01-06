const mongoose = require('mongoose')

const sneakerAssetSchema = new mongoose.Schema({
    assetName: {
        type: String,
    },
    assetUrl: {
        type: String,
    }
})

const SneakerAsset = mongoose.model('SneakerAsset', sneakerAssetSchema);

module.exports = SneakerAsset
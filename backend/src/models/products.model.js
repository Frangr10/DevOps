const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    /* name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String */

    name: {
        type: String,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    unitaryPrice: {
        type: Number,
        required: true
    },

    imgUrl: {
        type: String,
        //required: true
    },

    description: {
        type: String,
        required: true
    }
    }, {
        timestamps: true
    })

    module.exports = mongoose.model('Product', ProductSchema)
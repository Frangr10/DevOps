const express = require('express')
//const app = require('../models/server')
//const Product = require('../models/products.model')


async function productPost (req, res) {
    try {
        console.log('post')
        /* const {
            name,
            size,
            unitaryPrice,
            description
        } = req.body

        const product = Product ({
            name,
            size,
            unitaryPrice,
            description
    })

        const productStored = await product.save() */

        res.status(200).send({ succes: true })
    } catch (e) {
        res.status(500).send({ message: e.message })
        console.log(e)
    }
    /* const { userName, email, phoneNumber, password } = req.body
    const data = { userName, email, phoneNumber, password }
    
    
    
        const user = new User(data)
        await user.save()
    
        res.status(200).json({
            //message: 'Usuario desde controller POST',
            //user,
            message: `Tu id es ${user._id}`
        }) */
    
    }


module.exports = {
    //ProductGet,
    productPost
    //ProductPut,
    //ProductDel
}

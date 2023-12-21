const { Router } = require('express')
//const app = require('../models/server')
const { productPost } = require('../controllers/products.controller')

const router = Router()

//router.get('/', userGet)
router.post('/products', productPost)
//router.put('/:id', userPut)
//router.delete('/:id', userDel)


module.exports = router
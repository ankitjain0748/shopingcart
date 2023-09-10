const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const productc = require('../controllers/productscontroller')
const usersc = require('../controllers/userscontroller')

router.get('/',(req,res)=>{
    res.send("hello welcome")
})

router.post('/reg',regc.reginsert)

router.post('/login',regc.reglogin)

router.post('/productsadd',productc.productsadd)

router.get('/allproductsshow',productc.allproductsshow)

router.get('/singleproductshow/:id',productc.singleproductshow)

router.put('/singleproductupdata/:id',productc.singleproductupdate)

router.delete('/productdelete/:id',productc.singleproductdelete)

router.get('/usersfetch',usersc.allusersfetch)

router.delete('/userdelete/:id',usersc.singleuserdelete)

router.get('/productshow',productc.stockproductshow)

router.post('/cartproducts',productc.cartproducts)



module.exports = router

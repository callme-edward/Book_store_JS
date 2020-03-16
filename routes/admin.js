const express = require('express');
const path  = require('path');
const dirName = require('../utils/path');
const router = express.Router();

const product = [];

// admin/add-product => GET
router.get('/add-product',(req, res, next) =>{
    res.render('add-product',
    {
         pageTitle:'Add Product',
         path : '/admin/add-product',
         activeAddProduct: true,
         productCSS : true
    });
});


// admin/add-product => POST

router.post('/add-product', (req, res , next)=>{
    product.push({title : req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.products = product;
const express = require('express');
const path = require('path');
const dirName = require('../utils/path');
const adminData = require('./admin')
const router  = express.Router();


router.get('/',(req, res, next) =>{
    const products  = adminData.products;
   res.render('shop',{prods : products, pageTitle : 'Shop', path : '/'}); // sending dynamic data to the shop.pug and this doctitle is for index name of page which er are passing in shop.pug file as doctitle
});


module.exports = router;

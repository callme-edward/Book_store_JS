const express = require('express');
const path = require('path');
const dirName = require('../utils/path');
const adminData = require('./admin')
const router  = express.Router();


router.get('/',(req, res, next) =>{
    console.log(adminData.products);
    res.sendFile(path.join(dirName,'views','shop.html'));
});


module.exports = router;

const Product = require('../models/product');


exports.getAddProduct = (req, res, next) =>{
    res.render('admin/add-product',
    {
         pageTitle:'Add Product',
         path : '/admin/add-product',
         activeAddProduct: true,
         productCSS : true
    });
};

exports.postAddProduct = (req, res , next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}


exports.getProduct = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            prods : products,
             pageTitle : 'Shop',
              path : '/', 
              hasProducts:products.length > 0,
              activeShop: true,
              productCss: true
             }
         ); // sending dynamic data to the shop.pug and this doctitle is for index name of page which er are passing in shop.pug file as doctitle
     
    });
   }
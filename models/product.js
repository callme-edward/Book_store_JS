const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product{
  constructor(title, price, description, imageUrl,id, userId){
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongdb.ObjectId(id) : null;
    this.userId = userId;
  }

  save(){
    const db = getDb();
    let dbOp;
    if(this._id){
      // update the product
      dbOp = db
          .collection('products')
          .updateOne({_id : this._id}, {$set : this});
    }
    else{
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
    .then(result =>{
      console.log(result);
    })
    .catch(err =>{
      console.log(err);
    });
  }

  static fetchAll(){
    return db.collection('products')
    .find()
    .toArray()
    .then(products =>{
      console.log(products);
      return products;
    })
    .catch(err=>{
      console.log(err);
    });
  }

  static findById(prodId){
    const db = getDb();
    return db.collection('products')
        .find({_id:new mongodb.ObjectId(prodId)})
        .next()
        .then(product =>{
          console.log(product);
          return product;
        })
        .catch(err =>{
          console.log(err);
        });
  }

  static deleteById(prodId){
    const db = getDb();
    return db
    .collection('products')
    .deleteOne({_id : new mongodb.ObjectId(prodId)})
    .then(result =>{
      console.log('Deleted');
    })
    .catch(err =>{
      console.log(err);
    });
  }
}

module.exports = Product;






// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');

// const Product = sequelize.define('product',{
//   id : {
//     type : Sequelize.INTEGER,
//     autoIncrement : true,
//     allowNull : false,
//     primaryKey : true
//   },
//   title : Sequelize.STRING,

//   price :{
//     type : Sequelize.DOUBLE,
//     allowNull : false
//   },

//   imageUrl :{
//     type : Sequelize.STRING,
//     allowNull : false
//   },

//   description : {
//     type : Sequelize.STRING,
//     allowNull : false
//   }
// });


// module.exports = Product;

































// const db = require('../util/database');

 
// const Cart = require('./cart');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id,title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//       db.execute('INSERT INTO products (title , price , imageUrl, description) VALUES (?,?,?,?)',
//       [this.title, this.price, this.imageUrl, this.description]
//       );
//   }


// static deleteById(id){

// }

//   static fetchAll() {
//       db.execute('SELECT * FROM products');
//   }

//   static findById(id){
//      return db.execute('SELECT * FROM products WHERE products.id =?', [id]);
//   }

// }

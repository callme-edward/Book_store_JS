const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

// connect automatically with db shop in e-shop cluster and if db dose not exist it will create on fly once we start fill the data

const mongoConnect = callback => {
   // MongoClient.connect('mongodb+srv://edwy23:uQ07Zt1ErG8VXixa@e-shop-uzj2e.mongodb.net/shop?retryWrites=true&w=majority'
   // )
   MongoClient.connect('mongodb+srv://Rahul:c4kGW0Ya93qIzCe2@cluster0-ac12h.mongodb.net/test?retryWrites=true&w=majority')
   .then(client =>{
      console.log('connected!');
      _db = clinet.db();
      callback();
   })
   .catch(err =>{
      console.log(err);
      throw err;
   });
}

const getDb = () =>{
   if(_db){
      return _db;
   }

   throw 'NO database found';
}

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


















// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'Rahul','Rahul&$8126',
//  {
//     dialect : 'postgres',
//     host : 'localhost'
//  });

//  module.exports = sequelize;
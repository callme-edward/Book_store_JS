const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// you should create a user manually in db then try to find it or u can do so down while connecting to db 
app.use((req, res, next) =>{
    User.findById('sfkoie5kje5')
    .then(user =>{
        req.user = new User(user.name, user.email, user.cart, user._id);
        next();
    })
    .catch(err =>{
        console.log(err);
    });
});
console.log("hello");
app.use('/admin', adminRoutes);
app.use(shopRoutes); 

app.use(errorController.get404);

mongoConnect(()=>{
    app.listen(3000);
})













// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');
// const mongoConnect  = require('./util/database').mongoConnect;








// Product.belongsTo(User,{ constraints : true, onDelete : 'CASCADE'});
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, {through: CartItem});
// Product.belongsToMany(Cart, {through: CartItem});
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product , {through : OrderItem});

// sequelize
// .sync()
// // .sync({force : true})
// .then(result =>{
//     return User.findByPk(1);
// })
// .then(user =>{
//     if(!user){
//        return User.create({name : 'edward', email:'edwy@gmail.com'});
//     }
//     return user;
// })
// .then(user =>{
//     return user.createCart();
// })
// .then(cart =>{
//     app.listen(3000);
// })
// .catch(err =>{
//     console.log(err);
// })




















// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(bodyParser.json());

// let apiRoutes =  express.Router();
// app.use('./api',apiRoutes);


// let server :http.Server = app.listen(serverConfig.port);

// server.on('listening',()=>{
//     console.log(`Server started on ${serverConfig.port}`);
// })


// function onListening(){
//     console.info('Server is listening on:',serverConfig.port);
//     mongoose.connect(serverConfig.database.uri);
// }
// onListening();

 

// mongoose.connection.on('open', function (err:any) {
//     if (err) {
//         console.log("database error");
//         console.log(err);
//     } else {
//         console.log("database connection open success");

//         startRoutes(app);
//         const schemas = new Array();
//         mongoose.modelNames().forEach(function (modelName:any) {
//             schemas.push(mongoose.model(modelName));
//         })
//     }
// });




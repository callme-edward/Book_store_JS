const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
// const mongoConnect  = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{

});

app.use('/admin', adminRoutes);
app.use(shopRoutes); 

app.use(errorController.get404);

sequelize.sync()
.then(result =>{
    console.log(result);
    app.listen(3001);
})
.catch(err =>{
    console.log(err);
})




















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




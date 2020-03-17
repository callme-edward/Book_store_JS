const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine','ejs'); // instead of pug you can use any name and view engine is feature of app.set()
app.set('views','views'); // first views is feature and second one is folder name

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

app.listen(3001);
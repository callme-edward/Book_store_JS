const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs(
    {
        extname:"hbs",
        defaultLayout:'main-layout',
        layoutsDir:"views/layouts/"
    }
  )
);
app.set('view engine','hbs'); // instead of pug you can use any name and view engine is feature of app.set()
app.set('views','views'); // first views is feature and second one is folder name

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);



app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle:'Page Not Found'});
});

app.listen(3000);
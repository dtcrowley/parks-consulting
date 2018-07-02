import express from 'express';
// import db from './models';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

import exphbs from 'express-handlebars';

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    // partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'handlebars');

import pages from './controllers/htmlController.js';
// import vendors from './controllers/vendorController.js';

app.use(pages);
app.use(vendors);

app.listen(PORT, () => console.log('App now listening at localhost: ', PORT));
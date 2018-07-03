// Dependencies

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
// Sets up the Express app
const PORT = process.env.PORT || 8080;
const app = express();

// Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Sets up Handlebars

import exphbs from "express-handlebars";

app.set('views', path.join(__dirname, 'public', 'views'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'public', 'views', 'layouts')}
    // partialsDir: path.join(__dirname, '..', 'views', 'partials')}
));
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up the static directory
app.use(express.static('public'));

// Import router
import htmlRoutes from "./controllers/htmlController.js";

app.use(htmlRoutes);

// app.use(function(req, res, next){
//     res.status(404);

//     res.render('404');
//     return;
// });

// app.get('/', function(req, res){
//     res.render("index");
// });

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT)
});

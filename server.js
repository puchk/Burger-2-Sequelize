// Packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');
var exphbs = require("express-handlebars");

// Express
var app = express();
var port = process.env.PORT || 3000;

// Routes
var routes = require("./routes/burgerRoutes");

// DB Models
var db = require('./models');

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
// Method-override - Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// listen on port 3000
db.sequelize.sync().then(function() {
  app.listen(port, function(err) {
    console.log('Listening on port ' + port);
  });
});
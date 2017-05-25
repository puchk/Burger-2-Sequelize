var express = require("express");
var router = express.Router();

var db = require("../models");

// Set burgers as home page
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll({})
    .then(function(results) {
      res.locals.burgers = results;
      res.render("index");
    })
  });


// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  db.Burger.create({
    burger_name : req.body.burger_name
  }).then(function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
// router.put("/burgers/update", function(req, res) {
//   db.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

module.exports = router;

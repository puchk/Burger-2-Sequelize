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
  db.Burger.create({
    burger_name : req.body.burger_name
  }).then(function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  console.log(req.body.devoured);
  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(results) {
    console.log(results);
    res.redirect("/");
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");
const FbStrategy = require('passport-facebook').Strategy;

router.get("/", (req, res, next) => {
  res.render("index", {title: "IronTrip"});
});

router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/private-page",
  failureRedirect: "/"
}));

router.get("/private-page", (req, res, next) => {
  res.render("private-page");
});


module.exports = router;

var express = require("express");

var router = express.Router();

const credential = {
  email: "jannat@gmail.com",
  password: "jannat1234",
};
//login user

router.post("/login", (req, res) => {
  if (
    req.body.email === credential.email &&
    req.body.password === credential.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
    // res.end("Login Successful");
  } else {
    res.end("Invalid Username and password");
  }
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", {
      user: req.session.user,
    });
  } else {
    res.send("Unauthorized user!!");
  }
});

module.exports = router;

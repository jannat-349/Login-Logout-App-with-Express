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
    // res.redirect("/dashboard");
    res.end("Login Successful");
  } else {
    res.end("Invalid Username and password");
  }
});

module.exports = router;

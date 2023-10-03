var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    yourName: "Cheng Ho Lam", // Define yourName here
    aboutParagraph: "", // Define aboutParagraph here
  });
});

router.get("/index", function (req, res) {
  res.redirect("/");
});

router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "About",
    yourName: "Cheng Ho Lam", // Define yourName here
    yourLegalName: "Cheng Ho Lam", // Define yourLegalName here
    aboutParagraph:
      "Hello everyone! I am Cheng Ho Lam, a Software Engineering Technician at Centennial College.", // Define aboutParagraph here
  });
});

router.get("/products", function (req, res, next) {
  res.render("products", {
    title: "Products",
    yourName: "Cheng Ho Lam", // Define yourName here
    yourLegalName: "Cheng Ho Lam", // Define yourLegalName here
    aboutParagraph: "", // Define aboutParagraph here
  });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", {
    title: "Contact",
    yourName: "Cheng Ho Lam", // Define yourName here
    yourLegalName: "Cheng Ho Lam", // Define yourLegalName here
    aboutParagraph: "Hello!", // Define aboutParagraph here
  });
});

router.get("/services", function (req, res, next) {
  res.render("services", {
    title: "Services",
    yourName: "Cheng Ho Lam", // Define yourName here
    yourLegalName: "Cheng Ho Lam", // Define yourLegalName here
    aboutParagraph:
      "I work both frontend and backend. the following is the language i used", // Define aboutParagraph here
  });
});

module.exports = router;

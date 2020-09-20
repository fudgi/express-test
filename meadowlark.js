const express = require("express");
const fortune = require('./lib/fortune')

const app = express();

const handlebars = require("express-handlebars");
const createdHandlebars = handlebars.create({ defaultLayout: "main" });
app.engine("handlebars", createdHandlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  
  res.render("about", { fortune: fortune.randomFortune });
});

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.use((err, req, res, next) => {
  console.err(err.stack);
  res.type("text/plain");
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), () => console.log("http://localhost:3000/"));

const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const routes = require("./routes");
const app = express();
const port = 3000;
const randomBase = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
randomUrl = function () {
  let result = [];
  for (let i = 0; i < 5; i++) {
    let index = Math.trunc(Math.random() * 36);
    result.push(randomBase[index]);
  }
  return result.join("");
};
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.listen(3000, () => {
  console.log(`Express is running on http://localhost:${port}`);
});

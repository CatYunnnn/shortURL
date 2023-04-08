const express = require("express");
const router = express.Router();
const shortUrl = require("../../models/shortSchema");
router.get("/", (req, res) => {
  res.render("index");
});
router.post("/new", (req, res) => {
  let origin = req.body.short;
  async function findDoc() {
    let short;
    const doc = await shortUrl.findOne({ origin: `${origin}` }).lean();

    if (doc) {
      short = "http://localhost:3000/short/" + doc.short;
      res.render("outcome", { short });
    } else {
      short = randomUrl();
      const newdata = new shortUrl({
        origin: origin,
        short: short,
      });
      short = "http://localhost:3000/short/" + short;
      return newdata.save().then(() => {
        res.render("outcome", { short });
      });
    }
  }
  findDoc();
});
module.exports = router;

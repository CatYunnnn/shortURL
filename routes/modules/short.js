const express = require("express");
const router = express.Router();
const shortUrl = require("../../models/shortSchema");
router.get("/:id", (req, res) => {
  const id = req.params.id;
  shortUrl
    .findOne({ short: `${id}` })
    .lean()
    .then((doc) => res.redirect(`${doc.origin}`));
});
module.exports = router;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortUrlSchema = new Schema({
  origin: {
    type: String,
  },
  short: {
    type: String,
  },
});
module.exports = mongoose.model("shortUrl", shortUrlSchema);

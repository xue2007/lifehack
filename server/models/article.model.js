const Mongoose = require("mongoose");

const articleSchema = new Mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      default: "$0",
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Article", articleSchema);

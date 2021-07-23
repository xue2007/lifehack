const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    IC: {
      type: String,
      unique: true,
    },
    points: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("User", userSchema);

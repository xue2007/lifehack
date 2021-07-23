const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ic: {
      type: String,
      unique: true,
    },
    points: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("User", userSchema);

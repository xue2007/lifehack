const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const { errorFormatter } = require("./utils/errorFormater");
const { NOT_FOUND } = require("http-status");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/lifehack/v1", routes);

app.use((req, res, next) => {
  const err = errorFormatter("Route not found", NOT_FOUND);
  return next(err);
});
mongoose
  .connect(
    "mongodb+srv://user1:development@cluster0.7rhsn.mongodb.net/user1?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log(`Listening on port 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

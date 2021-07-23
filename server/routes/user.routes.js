const router = require("express").Router();

router.get("/ping", (req, res, next) => {
  res.send("Sucessfully inside user routes");
});

module.exports = router;

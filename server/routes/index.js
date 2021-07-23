const { Router } = require("express");
const { OK } = require("http-status");

const router = Router();
const userRouter = require("./user.routes");

router.get("/ping", (req, res, next) => {
  return res.status(OK).send("Successfully inside routes");
});

router.use("/user", userRouter);

module.exports = router;

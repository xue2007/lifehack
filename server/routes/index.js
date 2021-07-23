const { Router } = require("express");
const { OK } = require("http-status");

const router = Router();
const userRouter = require("./user.routes");
const articleRouter = require("./article.routes");

router.get("/ping", (req, res, next) => {
  return res.status(OK).send("Successfully inside routes");
});

router.use("/user", userRouter);

router.use("/article", articleRouter);

module.exports = router;

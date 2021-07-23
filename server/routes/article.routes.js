const {
  createArticleController,
  getArticleController,
  getAllArticleController,
} = require("../controllers/article.controllers");

const router = require("express").Router();
//to access all these routes you need
//to localhost 3000/lifehack/v1/article

router.get("/ping", (req, res, next) => {
  res.send("Sucessfully inside user routes");
});

router.post("/create", createArticleController);

router.get("/get", getArticleController);

router.get("/getAll", getAllArticleController);

module.exports = router;

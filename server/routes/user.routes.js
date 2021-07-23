const {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/user.controllers");

const router = require("express").Router();
//to access all these routes you need to localhost 3000/lifehack/v1/user
router.get("/ping", (req, res, next) => {
  res.send("Sucessfully inside user routes");
});

router.post("/create", createUserController);

router.get("/get", getUserController);

router.put("/update/:userId", updateUserController);

router.delete("/delete/:userId", deleteUserController);

module.exports = router;

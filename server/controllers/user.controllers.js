const { BAD_REQUEST, ACCEPTED, OK, UNAUTHORIZED } = require("http-status");
const {
  createUser,
  getUser,
  updateUserById,
  deleteUserById,
} = require("../services/users.service");

const { errorFormatter } = require("../utils/errorFormater");

const createUserController = async (req, res, next) => {
  const body = req.body;
  const ic = body.ic;

  let icExist;
  try {
    icExist = await getUser({ ic });
  } catch (err) {
    return next(err);
  }
  if (icExist) {
    const error = errorFormatter("IC is already registered", BAD_REQUEST);
    return next(error);
  }

  let user;
  try {
    user = await createUser({ ...body });
  } catch (err) {
    return next(err);
  }

  res.status(OK).json({ user: user });
};

const getUserController = async (req, res, next) => {
  const ic = req.body.ic;

  let user;
  try {
    user = await getUser({ ic });
  } catch (err) {
    return next(err);
  }

  res.status(ACCEPTED).json({ user: user });
};

const updateUserController = async (req, res, next) => {
  const body = req.body;
  let user;
  try {
    user = await updateUserById(req.params.userId, { ...body });
  } catch (err) {
    return next(err);
  }
  return res.status(OK).json({
    updatedUser: user,
  });
};

const deleteUserController = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    await deleteUserById(userId);
  } catch (err) {
    return next(err);
  }
  return res.status(OK).json({
    message: "deleted user with id /n" + userId + "successfully",
  });
};
module.exports = {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
};

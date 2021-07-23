// write your services here. your services interact with the db directly
const User = require("../models/user.model");

const createUser = async (user = {}) => {
  const newUser = new User({ ...user });
  const savedUser = await newUser.save();
  const userObj = savedUser.toObject();
  return userObj;
};

const getUser = async (user = {}) => {
  const userFind = await User.findOne({ ...user });
  if (!userFind) {
    return userFind;
  }
  const userObj = userFind.toObject();
  return userObj;
};

const updateUserById = async (userId, user = {}) => {
  const updatedUser = await User.findByIdAndUpdate(userId, user, {
    new: true,
  });

  return updatedUser;
};

const deleteUserById = async (userId) => {
  return await User.findByIdAndDelete(userId);
};
module.exports = {
  createUser,
  getUser,
  updateUserById,
  deleteUserById,
};

// write your services here. your services interact with the db directly
const Article = require("../models/article.model");

const createArticle = async (article = {}) => {
  const newArticle = new Article({ ...article });
  const savedArticle = await newArticle.save();
  return savedArticle;
};

const getArticle = async (article = {}) => {
  return await Article.findOne({ ...article });
};

const getAllArticle = async () => {
  return await Article.find();
};

module.exports = {
  createArticle,
  getArticle,
  getAllArticle,
};

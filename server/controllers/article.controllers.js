const { BAD_REQUEST, ACCEPTED, OK, UNAUTHORIZED } = require("http-status");
const {
  createArticle,
  getArticle,
  getAllArticle,
} = require("../services/article.service");

const { errorFormatter } = require("../utils/errorFormater");

const createArticleController = async (req, res, next) => {
  const body = req.body;
  const title = body.title;

  let titleExist;
  try {
    titleExist = await getArticle({ title });
  } catch (err) {
    return next(err);
  }
  if (titleExist) {
    const error = errorFormatter(
      "Already an article with the same title",
      BAD_REQUEST
    );
    return next(error);
  }

  let article;
  try {
    article = await createArticle({ ...body });
  } catch (err) {
    return next(err);
  }

  res.status(OK).json({ article: article });
};

const getArticleController = async (req, res, next) => {
  const title = req.body.title;

  let article;
  try {
    article = await getArticle({ title });
  } catch (err) {
    return next(err);
  }

  res.status(ACCEPTED).json({ article: article });
};

const getAllArticleController = async (req, res, next) => {
  let article;
  try {
    article = await getAllArticle();
  } catch (err) {
    return next(err);
  }

  res.status(ACCEPTED).json({ articleList: article });
};

module.exports = {
  createArticleController,
  getArticleController,
  getAllArticleController,
};

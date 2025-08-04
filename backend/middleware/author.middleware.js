const Post = require('../model/post.model');
const BaseError = require("../error/base.error");

module.exports = async (req, res, next) => {
  try {
    const post = await Post.findById(req?.params?.id);
    const authorId = req?.user?.id;

    if (!post) {
      return next(BaseError.NotFoundError("Post not found"));
    }

    if (String(post?.author) !== String(authorId)) {
      return next(BaseError.Forbidden("Only author can edit this post!"));
    }

    next();
  } catch (error) {
    return next(BaseError.Internal("Something went wrong checking author"));
  }
};

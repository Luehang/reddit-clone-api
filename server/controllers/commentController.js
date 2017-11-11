import Comment from './../models/Comment';
import Post from './../models/Post';

const commentController = {};

commentController.post = (req, res) => {
  const {
    text,
    userId,
    postId
  } = req.body;


  const comment = new Comment({
    text,
    _creator: userId,
    _post: postId
  });

  comment.save().then((newComment) => {
    Post.findByIdAndUpdate(
      postId,
      { $push: { '_comments': newComment._id } }
    ).then((existingPost) => {
      res.status(200).json({
        success: true,
        data: newComment,
        existingPost
      });
    }).catch((err) => {
      res.status(500).json({
        message: err
      });
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

module.exports = commentController;

import Post from './../models/Post';

const postController = {};

postController.post = (req, res) => {
  const {
    title,
    text,
    link,
    userId
  } = req.body;

  const post = new Post({
    title,
    text,
    link,
    _creator: userId
  });

  post.save().then((newPost) => {
    res.status(200).json({
      success: true,
      data: newPost
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};

postController.getAll = (req, res) => {
  Post.find({}).populate({
    path: '_creator',
    select: 'username createAt -_id'
  }).populate({
    path: '_comments',
    select: 'text createdAt _creator',
    match: { 'isDeleted': false }
  }).then((posts) => {
    res.status(200).json({
      success: true,
      data: posts
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

module.exports = postController;

const User = require('./../models/User.js');

const userController = {};

userController.post = (req, res) => {
  const { username, password } = req.body;


  const user = new User({
    username: username,
    password: password
  });

  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      data: newUser
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}

module.exports = userController;

const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: 'REDDIT CLONE API'
  });
};

module.exports = basicController;

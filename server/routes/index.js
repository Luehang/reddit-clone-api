const express = require('express');
const router = express.Router();
const basicController = require('../controllers/basicController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
import commentController from '../controllers/commentController';

router.get('/', basicController.get);

router.post('/signup', userController.post);

router.post('/post', postController.post);
router.get('/posts', postController.getAll);

router.post('/comment', commentController.post);

module.exports = router;

// Create web server
// some changes
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.commentPost);
router.get('/list', commentController.commentList);
router.get('/list/:id', commentController.commentListById);
router.put('/:id', commentController.commentUpdate);
router.delete('/:id', commentController.commentDelete);

module.exports = router;
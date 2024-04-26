const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const upload = require('../middlewares/upload'); // Importa a configuração do Multer

router.post('/',
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }]),
    blogController.createBlog
);

router.post('/:blogId/comments', blogController.addComment);

module.exports = router;
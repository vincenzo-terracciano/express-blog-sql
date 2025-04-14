const express = require('express');
const router = express.Router();

const PostController = require('../controllers/postController')

// index 
router.get('/', PostController.index)

// show 
router.get('/:id', PostController.show)

// store 
router.post('/', PostController.store)

// update 
router.put('/:slug', PostController.update)

// modify
router.patch('/:slug', PostController.modify)

// destroy 
router.delete('/:id', PostController.destroy)

module.exports = router
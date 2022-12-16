const express = require('express');
const router = express();
const userController = require('../controllers/UserController')
router.get('/users', userController.getUsers);

module.exports = router;
const express = require('express');
var router = express.Router();
var user = require('../controllers/userController');

router
	.route('/register')
		.post(user.postUser)
router	
	.route('/authenticate')
		.put(user.authenticateUser)

module.exports = router;

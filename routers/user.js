const express = require('express');
const { signupUser, signinUser } = require('../controllers/user');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', signinUser);

module.exports = router;

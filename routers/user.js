const express = require('express');
const { signupUser, signinUser, signOut } = require('../controllers/user');
const { userValidator, userValidationResult } = require('../validators/userValidator');

const router = express.Router();

router.post('/signup', userValidator, userValidationResult, signupUser);
router.post('/signin', signinUser);
router.get('/signout', signOut);

module.exports = router;

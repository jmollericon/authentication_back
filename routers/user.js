const express = require('express');
const { signupUser, signinUser, signOut } = require('../controllers/user');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', signinUser);
router.get('/signout', signOut);

module.exports = router;

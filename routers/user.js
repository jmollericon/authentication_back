const express = require('express');
const { signupUser, signinUser, signOut } = require('../controllers/user');
const { isAuth } = require('../middlewares/auth');
const { userValidator, userValidationResult } = require('../validators/userValidator');

const router = express.Router();

router.post('/signup', userValidator, userValidationResult, signupUser);
router.post('/signin', signinUser);
router.get('/signout', signOut);

router.get('/secret', isAuth, (req, res) => {
  res.json({ success: true, message: 'You are inside our secret page!' });
});

module.exports = router;

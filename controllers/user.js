const User = require('../models/user');
const JWT = require('jsonwebtoken');

const signToken = (userId) => {
  return JWT.sign({ _id: userId }, process.env.JWT_SECRET);
};

exports.signupUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, })
    if (user) {
      return res
        .status(400)
        .json({
          success: false,
          error: 'This email is already in use, try signin'
        });
    }

    const newUser = new User(req.body);
    const { firstname, lastname, email, role } = newUser;
    await newUser.save();

    const token = signToken(user._id);
    res.cookie('auth_token', token, {
      httpOnly: true
    });

    res
      .status(201)
      .json({ success: true, user: { firstname, lastname, email, role } });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Some error occor!' });
  }
}

exports.signinUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, error: 'User not found, try sign up!' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Email / Password do not match.' });
    }

    const token = signToken(user._id);
    res.cookie('auth_token', token, {
      httpOnly: true
    });

    const { firstname, lastname, role } = user;
    res
      .status(200)
      .json({ success: true, user: { firstname, lastname, email, role } })
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Some error occor!' });
  }
}

exports.signOut = (req, res) => {
  res
    .clearCookie('auth_token')
    .json({ success: true });
}

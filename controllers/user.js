const User = require('../models/user');

exports.signupUser = async (req, res) => {
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

  res.status(201).json({ success: true, user: { firstname, lastname, email, role } });
}

exports.signinUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ success: false, error: 'User not found, try sign up!' });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ success: false, error: 'Email / Password do not match.' });
  }

  const { firstname, lastname, role } = user;
  res.json({ success: true, user: { firstname, lastname, email, role } })
}

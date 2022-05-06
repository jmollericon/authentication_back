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
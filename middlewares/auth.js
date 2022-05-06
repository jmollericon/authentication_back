const JWT = require('jsonwebtoken');
const User = require('../models/user');

exports.isAuth = async (req, res, next) => {
  const isValid = await verifyToken(req);

  if (!isValid) {
    return res.status(401).json({ success: false, error: 'User not found, authentication required!' })
  }

  req.user = isValid;
  next();
}

const verifyToken = async (req) => {
  if (!req.cookies.auth_token) {
    return false;
  }

  const decode = JWT.verify(req.cookies.auth_token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: decode._id });

  if (!user) {
    return false;
  }

  return user;
}

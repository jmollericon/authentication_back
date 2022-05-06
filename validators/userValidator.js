const { check, validationResult } = require('express-validator');

exports.userValidationResult = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const error = result.array()[0].msg;
    return res.status(422).json({ success: false, error });
  }

  next();
}

exports.userValidator = [
  check('firstname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('First name is required')
    .isLength({ min: 4, max: 20 })
    .withMessage('First name must be 4 to 20 characters long!'),
  check('lastname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 4, max: 20 })
    .withMessage('Last name must be 4 to 20 characters long!'),
  check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email!'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .isLength({ min: 4 })
    .withMessage('Password must be atleast 4 characters long!')
]
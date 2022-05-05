const express = require("express");
require('dotenv').config();
require('./database/mongoose')

// models
const User = require('./models/user');

const app = express();

// use middlewares
app.use(express.json());

const PORT = process.env.PORT || 8002;
const user = new User({
  firstname: 'Jorge',
  lastname: 'Mollericon',
  email: 'jlmollericon@gmail.com',
  password: '1234',
  rol: 'admin'
});

user.save((err, user) => {
  if (err) return console.log(err);
  console.log(user)
})

app.listen(PORT, () => {
  console.log('Listen on port:', PORT);
});

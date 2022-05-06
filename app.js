const express = require("express");
require('dotenv').config();
require('./database/mongoose')

// routers
const userRouter =  require('./routers/user');;

// models
const User = require('./models/user');

const app = express();

// use middlewares
app.use(express.json());
app.use('/api', userRouter);

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log('Listen on port:', PORT);
});

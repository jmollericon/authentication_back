const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
require('./database/mongoose')

// routers
const userRouter =  require('./routers/user');;

const app = express();

// use middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', userRouter);

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log('Listen on port:', PORT);
});

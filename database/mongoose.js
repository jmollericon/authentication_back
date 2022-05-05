const mongoose = require('mongoose');

module.exports = mongoose.connect(
  process.env.DATABASE_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  },
  () => {
    console.log('Database is connected');
  }
);

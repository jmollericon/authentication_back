const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>This is our first server</h1>')
});

app.listen(8002, () => {
  console.log('Listen on port: 8002');
});

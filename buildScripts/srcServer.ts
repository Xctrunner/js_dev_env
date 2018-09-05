import * as express from 'express';
import open = require('open');
import * as path from 'path';

let port: number = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
      console.log(err);
  } else {
      open('http://localhost:' + port);
  }
});
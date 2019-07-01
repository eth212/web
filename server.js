var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
//  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //console.log(ip);
})

const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
})

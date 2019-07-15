'use strict';

const server = require('./lib/server.js');


app.use((err, req, res, next) => {
  console.log('Something went wrong, Error');
  res.status(500);
  res.send('Something went wrong, ERROR ヾ｜￣ー￣｜ﾉ')
});

app.use('*', (req, res, next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('What is this ヽ(ﾟｰﾟ*ヽ)ヽ(*ﾟｰﾟ*)ﾉ(ﾉ*ﾟｰﾟ)ﾉ');
  res.end();
});

server.start(8080);

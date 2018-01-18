var express = require('express');
var request = require('request');
var app = express();

app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("autr",' bmy')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  next();  
});  

app.get('/ip', function(req, res) {
  request('http://pv.sohu.com/cityjson?ie=utf-8', function (error, response, body) {
    let ip = JSON.parse(body.match(/\{[^\}]+\}/)[0])
    res.json({
      ip: ip.cip
    })
  })
});

app.listen('9090', () => {
  console.log('网站运行在9090端口')
});
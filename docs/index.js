const express = require('express');
const Router = express.Router();
const Http = require('./../../Modular/api/http')

Router.get('/', function(req, res, next) {
  Http.HttpGetMethods('http://pv.sohu.com/cityjson?ie=utf-8', cp =>{
    let ip = JSON.parse(cp.match(/\{[^\}]+\}/)[0])
    res.json(ip)
    //http://api.map.baidu.com/location/ip?ak=t1fLY5kTo0eegUAqtENfvPzn&ip=211.162.10.103&coor=bd09ll
    // Http.HttpGetMethods('http://api.map.baidu.com/location/ip?ak=t1fLY5kTo0eegUAqtENfvPzn&ip='+ ip.cip + '&coor=bd09ll', cb =>{
    //   res.json(JSON.parse)
    // })
  })
});

module.exports = Router;



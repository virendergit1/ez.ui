//var express = require('express');
//var app = express();
//var server = require('http').createServer(app);

//app.get('/', function (req, res) {
//    res.sendfile(__dirname + '/dist/src/index.html');
//});

//exports = module.exports = server;

//exports.use = function () {
//    app.use.apply(app, arguments);
//};

console.log('start');

var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('hello!');
});
module.exports = app;

console.log('end');
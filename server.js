'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('staticRoot', (process.env.NODE_ENV === 'production') ? 'public' : 'public-dev');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, app.get('staticRoot'))));
});
app.configure('development', function(){
  app.set('rjsBaseUrl', 'scripts');
  app.use(express.errorHandler());
});
app.configure('production', function(){
  app.set('rjsBaseUrl', 'http://rjstest.s3.amazonaws.com/2013-06-30/scripts');
});

var routes = {
  index: function(req, res){
    res.render('layout',{
      rjsBaseUrl: app.get('rjsBaseUrl'),
      isProduction: (process.env.NODE_ENV === 'production'),
      title: 'RequireJS Optimization Sample Page'
    });
  }
};

app.get('/', routes.index);
app.get('/page*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

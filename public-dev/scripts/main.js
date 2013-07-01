'use strict';

require.config({
  paths: {
    'jquery': 'vendors/jquery',
    'mustache' : 'vendors/mustache',
    'underscore': 'vendors/underscore',
    'backbone': 'vendors/backbone',
    'text': 'vendors/requirejs/text'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});


require(['mustache', 'jquery', 'underscore', 'backbone'], function( undefined, $, _, Backbone){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'page1' : 'page1',
      'page2' : 'page2'
    },
    index: function(){
      this._updateNavBar('.home');
      require(['pages/index'],function(callback){
        callback();
      });
    },
    page1: function(){
      this._updateNavBar('.page1');
      require(['pages/page1'],function(callback){
        callback();
      });
    },
    page2: function(){
      this._updateNavBar('.page2');
      require(['pages/page2'],function(callback){
        callback();
      });
    },
    _updateNavBar: function(className){
      $('.navbar').find('li').removeClass('active').filter(className).addClass('active');
    }
  });
  var appRouter = new AppRouter();
  Backbone.history.start();
});

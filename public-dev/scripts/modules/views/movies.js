'use strict';

define(['jquery','underscore', 'backbone', 'text!modules/templates/movies.mustache', 'modules/views/movie', 'modules/views/nav', 'vendors/bootstrap/bootstrap-scrollspy'],function($, _, Backbone, tmpl, ItemView, NavItemView ){
    return Backbone.View.extend({
        initialize: function(){
            this.$el.html(Mustache.render(tmpl, {}));
            this.collection.bind('reset',this.render, this);
        },
        render: function(){
            var self = this;
            this.$('div.subnav').find('.nav').empty().append(this.collection.map(function(movie){
                var view = new NavItemView({
                    model: movie,
                    collection: self.collection
                });
                return view.render().el;
            }));
            this.$('div.list').empty().append(this.collection.map(function(movie){
                var view = new ItemView({
                    model: movie,
                    collection : self.collection
                }).render();
                view.$el.attr('id', movie.get('id'));
                return view.el;
            }));
            $('body').scrollspy({
                target: '.subnav',
                offset: 100
            });
            return this;
        }
    });
});

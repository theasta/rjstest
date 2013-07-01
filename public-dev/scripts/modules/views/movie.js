'use strict';

define(['jquery','underscore', 'backbone', 'text!modules/templates/movie.mustache'],function($, _, Backbone, tmpl){
    return Backbone.View.extend({
        className: 'movie',
        render: function(){
            this.$el.html(Mustache.render(tmpl, this.model.toJSON()));
            return this;
        }
    });
});

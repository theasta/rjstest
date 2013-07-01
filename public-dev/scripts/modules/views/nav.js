'use strict';

define(['jquery','underscore', 'backbone', 'text!modules/templates/nav.mustache'],function($, _, Backbone, tmpl){
    return Backbone.View.extend({
        tagName: 'li',
        render: function(){
            this.$el.html(Mustache.render(tmpl, this.model.toJSON()));
            return this;
        }
    });
});

'use strict';

define(['jquery','underscore', 'backbone', 'text!modules/templates/book.mustache'],function($, _, Backbone, tmpl){
    return Backbone.View.extend({
        className: 'book tab-pane',
        render: function(){
            this.$el.html(Mustache.render(tmpl, this.model.toJSON()));
            return this;
        }
    });
});

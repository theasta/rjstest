'use strict';

define(['jquery','underscore', 'backbone', 'text!modules/templates/books.mustache', 'modules/views/book', 'modules/views/tab', 'vendors/bootstrap/bootstrap-tab'],function($, _, Backbone, tmpl, ItemView, TabItemView ){
    return Backbone.View.extend({
        initialize: function(){
            this.$el.html(Mustache.render(tmpl, {}));
            this.collection.bind('reset',this.render, this);
        },
        render: function(){
            var self = this,
                $tabs = this.$('ul.nav').empty().append(this.collection.map(function(book){
                var view = new TabItemView({
                    model: book,
                    collection: self.collection
                });
                return view.render().el;
            }));
            this.$('div.list').empty().append(this.collection.map(function(book){
                var view = new ItemView({
                    model: book,
                    collection : self.collection
                }).render();
                view.$el.attr('id', book.get('id'));
                return view.el;
            }));
            $tabs.find('a:first').tab('show');
            return this;
        }
    });
});

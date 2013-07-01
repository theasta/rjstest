'use strict';

define(['jquery','underscore', 'backbone', 'modules/models/book'], function($, _, Backbone, Book){
    var Books = Backbone.Collection.extend({
        model: Book
    });
    return Books;
});

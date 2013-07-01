'use strict';

define(['jquery','underscore', 'backbone', 'modules/models/movie'], function($, _, Backbone, Movie){
    var Movies = Backbone.Collection.extend({
        model: Movie
    });
    return Movies;
});

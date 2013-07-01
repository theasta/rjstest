'use strict';

define(['jquery', 'underscore', 'backbone'], function($, _, Backbone ) {
    return Backbone.Model.extend({
        defaults: {
            img: 'http://placehold.it/260x180'
        }
    });
});

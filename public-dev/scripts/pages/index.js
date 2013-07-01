'use strict';

define(['jquery', 'text!modules/templates/index.mustache'],function($, tmpl){
    return function(){
        $('#main').html(Mustache.render(tmpl,{
            heading : "Sample App",
            tagline: "Used to test requirejs optimization tool on a multi-pages website",
            link : 'http://theasta.github.com'
        }));
    };
});

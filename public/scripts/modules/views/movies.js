define(["jquery","underscore","backbone","text!modules/templates/movies.mustache","modules/views/movie","modules/views/nav","vendors/bootstrap/bootstrap-scrollspy"],function(e,t,n,r,i,s){return n.View.extend({initialize:function(){this.$el.html(Mustache.render(r,{})),this.collection.bind("reset",this.render,this)},render:function(){var t=this;return this.$("div.subnav").find(".nav").empty().append(this.collection.map(function(e){var n=new s({model:e,collection:t.collection});return n.render().el})),this.$("div.list").empty().append(this.collection.map(function(e){var n=(new i({model:e,collection:t.collection})).render();return n.$el.attr("id",e.get("id")),n.el})),e("body").scrollspy({target:".subnav",offset:100}),this}})});
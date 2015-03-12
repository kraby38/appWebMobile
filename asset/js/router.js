define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'view/checkin/list'//view/checkin/list.js
	'config'
	
	], function($,_,Backbone,CheckinListView) {
		
		var Router = Backbone.Router.extend({
			routes: {
			    "":                 "home",    // #help
			    "hello":        "hello",  // #search/kiwis
			    "hello/:name": 	"hello",
			  }
		})

		var initialize = function(){

			var routeur = new Router;
			$.ajaxPrefilter( function( options, originalOption, jqXHR){
				options.url = 'http://checkin-api.dev.cap-liberte.com'+options.url;
				options.crossDomain = {
					crossDomain: true
				};
			});
			routeur.on("route:home", function() {
				CheckinListView = new CheckinListView();
  				console.log('home');
			});
			routeur.on("route:hello", function(name) {
  				console.log('hello'+ name);
			});
			Backbone.history.start();

		};
		return {
			initialize: initialize
		};
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});


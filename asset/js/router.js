define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'view/checkin/list',//view/checkin/list.js
	'config'
	
	], function($,_,Backbone,CheckinListView,Config) {
		
		var Router = Backbone.Router.extend({
			routes: {
			    "":              "home",    // #help
			    "hello":         "hello",  // #search/kiwis
			    "hello/:name": 	 "hello",
			  }
		})

		var initialize = function(){
			var routeur = new Router;

			$.ajaxPrefilter( function( options, originalOption, jqXHR){
				options.url = Config.apiServer+options.url;// a la place de l'url
				options.crossDomain = {
					crossDomain: true
				};
			});
			routeur.on("route:home", function() {
				console.log('home');
				CheckinListView = new CheckinListView();
				CheckinListView.render();  				
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


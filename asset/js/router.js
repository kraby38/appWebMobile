define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'view/checkin/list',//view/checkin/list.js
	'view/checkinid/chekinId',
	'config'
	
	], function($,_,Backbone,CheckinListView,CheckInSelected,Config) {
		
		var Router = Backbone.Router.extend({
			routes: {
			    "":              "home",    // #help
			    "hello":         "hello",  // #search/kiwis
			    "hello/:name": 	 "hello",
			    "checkin/:id" :  "checkin",
			  }
		})

		var initialize = function(){
			var routeur = new Router;

			$.ajaxPrefilter( function( options, originalOption, jqXHR){
				options.url = Config.apiServer+options.url;// a la place de l'url
				alert(Config.apiServer+"   "+options.url);
				options.crossDomain = {
					crossDomain: true
				};
			});
			routeur.on("route:home", function() {
				alert('home');
				CheckinListView = new CheckinListView();
				CheckinListView.render();  				
			});
			routeur.on("route:hello", function(name) {
  				alert('hello'+ name);
			});
			routeur.on("route:checkin", function(id) {
  				alert('checkin  '+ id);
  				checkinselected = new CheckInSelected(id);
				checkinselected.render({id:id}); 
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


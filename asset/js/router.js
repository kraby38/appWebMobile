define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'view/checkin/list',//view/checkin/list.js
	'view/checkinid/chekinId',//CheckInSelected
	'view/checkinadd/chekinAdd',
	'config'
	
	], function($,_,Backbone,CheckinListView,CheckInSelected,CheckInadd,Config) {
		
		var Router = Backbone.Router.extend({
			routes: {
			    "":              "home",    // #help
			    "hello":         "hello",  // #search/kiwis
			    "hello/:name": 	 "hello",
			    "checkin/add" :  "checkinadd",
			    "checkin/:id" :  "checkin",
			    
			  }
		})

		var initialize = function(){
			var routeur = new Router();

			$.ajaxPrefilter( function( options, originalOption, jqXHR){
				console.log('ajaxPrefilter');
				options.url = Config.apiServer+options.url;// a la place de l'url
				console.log(Config.apiServer+"   "+options.url);
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
			routeur.on("route:checkinadd", function() {
  				console.log('checkin detail route ');
  				checkinadd = new CheckInadd();
				checkinadd.render(); 
			});
			routeur.on("route:checkin", function(id) {
  				console.log('checkin  '+ id);
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


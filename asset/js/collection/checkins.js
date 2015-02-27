define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone'
	], function($,_,Backbone) {
		
		var CheckInCollection = Backbone.Collection.extend({
			url: '/checkin'
		})
		return CheckInCollection;
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});
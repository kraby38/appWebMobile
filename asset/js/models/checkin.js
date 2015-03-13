define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone'
	], function($,_,Backbone) {
		
		var CheckInModel = Backbone.Collection.extend({
			urlRoot: '/checkin'
		})
		return CheckInModel;
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});
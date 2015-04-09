define(
	[
	'jquery',
	'underscore',
	'backbone',
	'router',
	'gmaps'
	], function($,_,Backbone,router,gmaps) {		
		var initialize = function(){
			$('h1').html('Menu de l \'api');
			router.initialize();
		};
		return {
			initialize: initialize
		}
	});
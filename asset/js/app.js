define(
	[
	'jquery',
	'underscore',
	'backbone',
	'router'
	], function($,_,Backbone,router) {		
		var initialize = function(){
			$('h1').html('Menu de l \'api');
			router.initialize();
		};
		return {
			initialize: initialize
		}
	});
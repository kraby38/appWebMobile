define(
	[
	'jquery'
	], function($) {		
		var initialize = function(){
			$('h1').html('Menu de l \'api').hide().show(1000);
		};
		return {
			initialize: initialize
		}
	});
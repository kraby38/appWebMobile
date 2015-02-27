require.config({
	path: {
		jquery: 'vendor/jquery/jquery', // -> vendor/jquery/jquery.js
		underscore : 'vendor/Underscore/underscore', //->vendor/Underscore/underscore.js
		backbone : 'vendor/backbone/backbone', // -> vendor/backnone/backbone.js		
	},
	shim: {
		'backbone' : {
			deps : ['underscore','jquery'],
			export: 'Backbone'
		},
		'underscore' : {
			export: '_'
		}

	}
});


require(
	[
	'app'
	] , function(app){
		app.initialize();
	}
	);
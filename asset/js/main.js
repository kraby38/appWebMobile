require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery', // -> vendor/jquery/jquery.js
		'underscore' : 'vendor/underscore/underscore', //->vendor/underscore/underscore.js
		'backbone' : 'vendor/backbone/backbone', // -> vendor/backnone/backbone.js		
		'text' : 'vendor/RequireJs/text' // -> vendor/RequireJs/text.js	
	},
	shim: {
		'backbone' : {
			deps : ['underscore','jquery'],
			export: 'Backbone'
		},
		'underscore' : {
			export: '_'
		},
		'jquery' : {
			export: '$'
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
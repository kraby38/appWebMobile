require.config({
	paths: {
		'jquery': 'vendor/jquery/src/jquery', // -> vendor/jquery/jquery.js
		'underscore' : 'vendor/underscore/underscore', //->vendor/underscore/underscore.js
		'backbone' : 'vendor/backbone/backbone', // -> vendor/backnone/backbone.js		
		'text' : 'vendor/RequireJs/text', // -> vendor/RequireJs/text.js	
		'async':'vendor/requirejs-plugins/src/async',
		'gmaps': 'gmaps'
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
		},
		'gmaps': 'gmaps'

	},
	urlArgs: "_=" + (new Date()).getTime()
});


require(
	[
	'app'
	] , function(app){
		app.initialize();
	}
	);


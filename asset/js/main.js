require.config({
	path: {
		jquery: 'vendor/jquery/jquery', // -> vendor/jquery/jquery.js
	}
});


require(
	[
	'jquery'
	], function($) {
		$('body').html('test page');
	}
	);
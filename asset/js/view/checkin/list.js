define(
	[
	'jquery',
	'underscore',
	'backbone',
	'collection/checkins'

	], function($,_,Backbone,checkinCollection) {

		var checkinlistview = Backbone.View.extend({
			render: function(){
				console.log("checkinlistview render");
				checkinCollection = new checkinCollection();
				checkinCollection.fetch({
					success: function(checkins){
						console.log(checkins);
					}
				});
			}
		});
		return checkinlistview;
		
	});
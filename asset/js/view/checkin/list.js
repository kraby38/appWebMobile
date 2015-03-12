define(
	[
	'jquery',
	'underscore',
	'backbone',
	'collection/checkins',
	'text!../../../template/checkin/list.html'

	], function($,_,Backbone,CheckInCollection,CheckInListTemplate) {

		var CheckInListView  = Backbone.View.extend({
			el: '#chekin',
			template : '<h3>test template</h3>',
			list : _.template(CheckInListTemplate),

			render: function(){
				var self = this;
				console.log("CheckInListView Render");
				checkinCollection = new CheckInCollection();
				checkinCollection.fetch({
					success: function(checkins){
						console.log(checkins.models);
						console.log(self.$el);
						self.$el.html(self.template);
						self.$el.html(self.list({
							checkInList: checkins.models
						}));
					}
				});
			}
		});
		return CheckInListView ;
		
	});
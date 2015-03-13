define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'models/checkin',
	], function($,_,Backbone,CheckInModels) {
		
		var CheckInSelected = Backbone.Collection.extend({
			el: "#checkinlist",

			render: function(options){
				alert('CheckInDetailsView Render test' + options.id);
				var that = this;
				 if(options.id){
					 that.checkIn = new CheckInModel({id: options.id});
					 that.checkIn.fetch({
						 success: function(checkin){
						 	console.log(checkin);
						 }
					 });
				 }
		}
		})



		return CheckInSelected;
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});
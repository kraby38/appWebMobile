define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'models/checkin',
	'text!../../../template/checkin/idcheckin.html'
	], function($,_,Backbone,CheckInModels) {
		
		var CheckInSelected = Backbone.Collection.extend({
			el: "#checkinlist",

			render: function(options){
				console.log('CheckInDetailsView Render test' + options.id);
				var that = this;
				if(options.id){
					that.checkIn = new CheckInModels({id: options.id});
					that.checkIn.fetch({
						success: function(checkin){
							console.log(checkin);
							//appele template
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
define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'models/checkin',
	'text!../../../template/checkin/addcheck.html'
	], function($,_,Backbone,CheckInModels,checkadd) {
		
		var CheckInadd = Backbone.Collection.extend({
			el: "#checkinlist",
			template : _.template(checkadd)
			render: function(option){
				console.log('CheckInDetailsView Render test' );
				
				this.$el.html(self.template());
					
				
			}
		})



		return CheckInadd;
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});
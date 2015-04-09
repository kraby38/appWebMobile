define(
	[
	// definition des dépendances
	'jquery', // lib jquery
	'underscore',
	'backbone',
	'models/checkin',
	'text!../../../template/checkin/addcheck.html'
	], function($,_,Backbone,CheckInModels,checkadd) {		
		var CheckInadd = Backbone.View.extend({
			el: "#chekinlist",
			addcheck : _.template(checkadd),

			render: function(){
				var self = this;
				console.log('CheckInDetailsView Render test');
				console.log(self.$el);
				self.$el.html(self.addcheck());	
							
			},
			events: {
                 "submit #checkinform": "saveCheckIn"
            },

            saveCheckIn: function(event){
                event.preventDefault();

                checkin = new CheckInModel();

                serializeArray = $(event.currentTarget).serializeArray();


                $.each(serializeArray, function(i, o){
                    // console.log(i);
                    // console.log(o);
                    // console.log(o.name);
                    // console.log(o.value);
                    checkin.set(o.name, o.value)

                });
                console.log(checkin);

                checkin.save();
                
            }
		});
		return CheckInadd;
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});
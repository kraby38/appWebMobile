define(
	[
	// definition des dépendances
	'jquery', // lib jquery

	], function($) {
		/* on passe jQuery en parametre de la fonction 
		** ce qui permet de l'utiliser par la suite
		** exemple : *('.exemple').hide()
		** definition des variables		
		*/
		var initialize = function(){
		};
		return {
			initialize: initialize
		};
		/* 
		** ici on retourne ce qu'on veux pouvoir utiliser 
		** dans d'autres modules
		*/
	});
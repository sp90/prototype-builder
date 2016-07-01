(function() {
	// No strict because of babel.js

	var modules = [
		'filter.romanize',
		'service.romans',
		'directive.slider'
	];

	angular
		.module('controller.rome', modules)
		.controller('RomeController', RomeController);

	function RomeController($scope, $filter, Romans) {
		var rome = this;

		angular.extend(rome, {
			title: '10 most famous people from acient rome',
			romans: [],
			sliderContent: [
				'/images/commodus.jpg',
				'/images/tiberius-gracchus.jpg',
				'/images/julius-caesar.jpg',
				'/images/augustus.jpg'
			]
		});

		Romans.get()
			.then(function(romans) {
				angular.extend(rome, {
					romans: romans
				})
			});
	}
})();

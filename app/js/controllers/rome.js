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

	RomeController.$inject = ['$scope', '$filter', 'Romans'];

	function RomeController($scope, $filter, Romans) {
		var rome = this;

		angular.extend(rome, {
			title: '10 most famous people from acient rome',
			romans: [],
			sliderContent: [
				'commodus.jpg',
				'tiberius-gracchus.jpg',
				'julius-caesar.jpg',
				'augustus.jpg'
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

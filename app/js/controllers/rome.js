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

	RomeController.$inject = ['$scope', '$filter', 'romans'];

	function RomeController($scope, $filter, romans) {
		var rome = this;

		angular.extend(rome, {
			title: '10 most famous people from acient rome',
			romans: romans,
			sliderContent: [
				'commodus.jpg',
				'tiberius-gracchus.jpg',
				'julius-caesar.jpg',
				'augustus.jpg'
			]
		});
	}
})();

(function() {
	// No strict because of babel.js

	var modules = [
		'filter.romanize',
		'service.romans'
	];

	angular
		.module('app.controller.rome', modules)
		.controller('RomeController', RomeController);

	RomeController.$inject = ['$scope', '$filter', 'romans'];

	function RomeController($scope, $filter, romans) {
		var rome = this;

		// Bind object to scope
		angular.extend(rome, {
			title: '10 most famous people from acient rome',
			romans: romans
		});
	}
})();

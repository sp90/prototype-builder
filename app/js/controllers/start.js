(function() {
	// No strict because of babel.js

	var modules = [
		'filter.romanize'
	];

	angular
		.module('app.controller.start', modules)
		.controller('StartController', StartController);

	StartController.$inject = [];

	function StartController($scope) {
		var start = this;

		angular.extend(start,{
			title: 'This is our start controller'
		});
	}
})();

(function() {
	// No strict because of babel.js

	var modules = [
		'directive.slider'
	];

	angular
		.module('controller.cv', modules)
		.controller('CvController', CvController);

	function CvController($scope) {
		var rome = this;

		angular.extend(rome, {
			title: 'Noget med CV'
		});
	}
})();

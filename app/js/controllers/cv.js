(function() {
	// No strict because of babel.js

	var modules = [
		'directive.slider'
	];

	angular
		.module('controller.cv', modules)
		.controller('CvController', CvController);

	CvController.$inject = ['$scope'];

	function CvController($scope) {
		var rome = this;

		angular.extend(rome, {
			title: 'Noget med CV',
			sliderContent: [
				'commodus.jpg',
				'tiberius-gracchus.jpg',
				'julius-caesar.jpg',
				'augustus.jpg'
			]
		});
	}
})();

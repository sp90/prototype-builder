(function() {
	// No strict because of babel.js

	angular
		.module('app.controller.start',[])
		.controller('StartController', StartController);

	StartController.$inject = [];
	
	function StartController($scope) {
		var start = this;

		angular.extend(start,{
			title: 'This is our start controller'
		});
	}
})();
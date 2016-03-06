(function() {
	// No strict because of babel.js

	var modules = [
		'ui.router',
		'app.controller.start'
	];

	angular
		.module('app', modules)
		.config(Config);

	Config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

	function Config($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('start', {
				url: '/',
				templateUrl: 'partials/start.html',
				controller: 'StartController',
				controllerAs: 'start'
			});

		$urlRouterProvider
			.otherwise('/');
	}

})();

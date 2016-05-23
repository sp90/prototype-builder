(function() {
	// No strict because of babel.js

	var modules = [
		// Angular native modules
		'ngSanitize',

		// Third party
		'ui.router',

		// Controllers
		'controller.rome',
		'controller.cv'
	];

	angular
		.module('app', modules)
		.config(Config);

	// Inject dependencies
	Config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

	// Config app
	function Config($locationProvider, $stateProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('rome', {
				url: '/',
				templateUrl: 'partials/rome.html',
				controller: 'RomeController',
				controllerAs: 'rome'
			})
			.state('cv', {
				url: '/cv',
				templateUrl: 'partials/cv.html',
				controller: 'CvController',
				controllerAs: 'cv'
			});

		$urlRouterProvider
			.otherwise('/');
	}
})();

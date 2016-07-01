(function() {
	// No strict because of babel.js

	var modules = [
		// Third party
		'ui.router',

		// Controllers
		'controller.rome',
		'controller.cv'
	];

	angular
		.module('app', modules)
		.config(Config);

	// Config app
	function Config($locationProvider, $stateProvider, $urlRouterProvider, $sceDelegateProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('rome', {
				url: '/',
				templateUrl: '/controllers/rome/rome.html',
				controller: 'RomeController',
				controllerAs: 'rome'
			})
			.state('cv', {
				url: '/cv',
				templateUrl: '/controllers/cv/cv.html',
				controller: 'CvController',
				controllerAs: 'cv'
			});

		$urlRouterProvider
			.otherwise('/');

		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from our assets domain.  Notice the difference between * and **.
			'https://s3.eu-central-1.amazonaws.com/**'
		]);
	}
})();

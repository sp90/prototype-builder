(function() {
    // Don't apply strict its getting 
    // applied by the babel es6 transpiler

    angular
        .module('app', [
            'ui.router',
            'app.controller.index'
        ])
        .config(['$locationProvider','$stateProvider','$urlRouterProvider', Config]);

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
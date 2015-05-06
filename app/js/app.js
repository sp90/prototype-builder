(function() {
    'use strict';

    angular
        .module('app',[
            'ui.router',
            'app.controller.index'
        ])
        .config(['$locationProvider','$stateProvider','$urlRouterProvider', Config]);

    function Config($locationProvider, $stateProvider, $urlRouterProvider) {
         
        //$locationProvider.html5Mode(true);

        $stateProvider
            .state('index', {
                url: "/", 
                templateUrl: "partials/index.html", 
                controller: 'IndexController',
                controllerAs: 'vm'
            }); 

        $urlRouterProvider 
            .otherwise("/");
    }

})(); 
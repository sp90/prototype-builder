(function() {
    'use strict';

    // index component
    angular
	    .module('app.controller.index',[])
	    .controller('IndexController', IndexController);

	    IndexController.$inject = ['$scope'];

	    function IndexController($scope) {

			var vm = this;

			// vm is the object available to the view
			angular.extend(vm,{
				
			});

	    }

})();
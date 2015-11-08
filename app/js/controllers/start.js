(function() {
    // Don't apply strict its getting applied by the babel es6 transpiler

    angular
	    .module('app.controller.start',[])
	    .controller('StartController', StartController);

	    // Dont use the injects this gets sorted out by ng-annotate

	    function StartController($scope) {

			var start = this;

			// start is the object available to the view
			angular.extend(start,{
				title: 'This is our start controller'
			});

	    }
})();
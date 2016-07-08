(function() {
	'use strict';

	// Some test here
	describe('{{nameUpper}}Controller function', function() {
		var $scope;

		beforeEach(module('controller.{{name}}'));
		beforeEach(module('/controllers/{{name}}/{{name}}.html'));

		beforeEach(inject(function($rootScope, $controller, $httpBackend) {
			$scope = $rootScope.$new();

			$controller('{{nameUpper}}Controller', {
				$scope: $scope
			});

			// Get fixture if any http requests is made on init
			// var fixture = window.__fixtures__['/services/romans/romans.fixture'];
			// $httpBackend.whenGET('/services/romans/romans.fixture.json').respond(fixture);
			// $httpBackend.flush();
		}));

		it('should create something', function() {
			// Expect something
			$scope.$digest();

			console.log("$scope: ", $scope);
		});
	});
})();

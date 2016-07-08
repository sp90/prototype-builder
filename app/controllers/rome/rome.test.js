(function() {
	'use strict';

	// Some test here
	describe('RomeController function', function() {
		var $scope;

		beforeEach(module('controller.rome'));
		beforeEach(module('/controllers/rome/rome.html'));

		beforeEach(inject(function($rootScope, $controller, $httpBackend) {
			$scope = $rootScope.$new();

			$controller('RomeController', {
				$scope: $scope
			});

			// Get fixture
			var fixture = window.__fixtures__['/services/romans/romans.fixture'];
			$httpBackend.whenGET('/services/romans/romans.fixture.json').respond(fixture);
			$httpBackend.flush();
		}));

		it('should create something', function() {
			// Expect something
			$scope.$digest();
		});
	});
})();

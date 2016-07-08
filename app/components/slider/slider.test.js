(function() {
	'use strict';

	describe('Slider component', function() {
		var $outerScope, $scope, element;

		beforeEach(module('directive.slider'));
		beforeEach(module('/components/slider/slider.html'));
		beforeEach(module('/components/slider/slider.fixture.html'));

		beforeEach(inject(function($compile, $rootScope, $templateCache) {
			// Get fixture
			var fixture = $templateCache.get('/components/slider/slider.fixture.html');
			// Create scope
			$outerScope = $rootScope.$new();
			// Compile scope & fixture into the compiled element
			element = $compile(angular.element(fixture))($outerScope);
			// Init digest, to test before it has been given any data
			$outerScope.$digest();
		}));

		it('before content should not be eq to after slidercontent scope has been digested', function() {
			// Update outerScope
			$outerScope.sliderContent = [
				'/images/commodus.jpg',
				'/images/tiberius-gracchus.jpg',
				'/images/julius-caesar.jpg',
				'/images/augustus.jpg'
			];

			var before = element.html();

			$outerScope.$digest();

			var after = element.html();

			expect(before).not.to.eq(after);
		});

		it('should have default values', function() {
			// Update outerScope
			$outerScope.sliderContent = [
				'/images/commodus.jpg',
				'/images/tiberius-gracchus.jpg',
				'/images/julius-caesar.jpg',
				'/images/augustus.jpg'
			];

			$outerScope.$digest();

			var $scope = element.isolateScope();

			expect($scope.sliderState).to.exist;
		});

		it('should trigger next click and validate the sliderstate is correct', function() {
			// Update outerScope
			$outerScope.sliderContent = [
				'/images/commodus.jpg',
				'/images/tiberius-gracchus.jpg',
				'/images/julius-caesar.jpg',
				'/images/augustus.jpg'
			];

			$outerScope.$digest();

			var $scope = element.isolateScope();

			expect($scope.sliderState).to.be.eq(0);

			$scope.next();

			expect($scope.sliderState).to.be.eq(1);

			$scope.next();

			expect($scope.sliderState).to.be.eq(2);

			$scope.next();

			expect($scope.sliderState).to.be.eq(3);

			$scope.next();

			expect($scope.sliderState).to.be.eq(0);
		});

		it('should trigger prev click and validate the sliderstate is correct', function() {
			// Update outerScope
			$outerScope.sliderContent = [
				'/images/commodus.jpg',
				'/images/tiberius-gracchus.jpg',
				'/images/julius-caesar.jpg',
				'/images/augustus.jpg'
			];

			$outerScope.$digest();

			var $scope = element.isolateScope();

			expect($scope.sliderState).to.be.eq(0);

			$scope.prev();

			expect($scope.sliderState).to.be.eq(3);

			$scope.prev();

			expect($scope.sliderState).to.be.eq(2);

			$scope.prev();

			expect($scope.sliderState).to.be.eq(1);

			$scope.prev();

			expect($scope.sliderState).to.be.eq(0);
		});

		it('should trigger goTo click and validate the sliderstate is correct', function() {
			// Update outerScope
			$outerScope.sliderContent = [
				'/images/commodus.jpg',
				'/images/tiberius-gracchus.jpg',
				'/images/julius-caesar.jpg',
				'/images/augustus.jpg'
			];

			$outerScope.$digest();

			var $scope = element.isolateScope();

			expect($scope.sliderState).to.be.eq(0);

			$scope.goTo(2);

			expect($scope.sliderState).to.be.eq(2);

			// Not in the range so should reset to first slide
			$scope.goTo(5);

			expect($scope.sliderState).to.be.eq(0);
		});
	});
})();

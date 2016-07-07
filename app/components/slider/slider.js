(function() {
	'use strict';

	angular
		.module('directive.slider', [])
		.directive('slider', slider);

	function slider() {
		return {
			restrict: 'E', // only activate on element attribute
			templateUrl: '/components/slider/slider.html',
			scope: {
				content: '='
			},
			link: link
		};

		function link(scope, element, attrs) {
			angular.extend(scope, {
				sliderState: 0,
				next: next,
				prev: prev,
				goTo: goTo
			});

			function prev() {
				if (scope.sliderState < 1) {
					angular.extend(scope, {
						sliderState: scope.content.length - 1
					});
				} else {
					angular.extend(scope, {
						sliderState: scope.sliderState - 1
					});
				}
			}

			function next() {
				if (scope.sliderState < scope.content.length - 1) {
					angular.extend(scope, {
						sliderState: scope.sliderState + 1
					});
				} else {
					angular.extend(scope, {
						sliderState: 0
					});
				}
			}

			function goTo($index) {
				if ($index < scope.content.length) {
					angular.extend(scope, {
						sliderState: $index
					});
				} else {
					angular.extend(scope, {
						sliderState: 0
					});
				}
			}
		}
	}
})();

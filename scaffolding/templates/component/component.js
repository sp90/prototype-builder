(function() {
	'use strict';

	angular
		.module('directive.{{name}}', [])
		.directive('{{name}}', {{name}});

	function {{name}}() {
		return {
			restrict: 'E',
			templateUrl: '/components/{{name}}/{{name}}.html',
			scope: {
				content: '='
			},
			link: link
		};

		function link(scope, element, attrs) {
			angular.extend(scope, {

			});
		}
	}
})();

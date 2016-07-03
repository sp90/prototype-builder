(function() {
	'use strict';

	angular
		.module('filter.{{name}}', [])
		.filter('{{name}}', {{name}});

	function {{name}}() {
		return function(val) {

			// Output {{name}} val
			return val;
		};
	}
})();

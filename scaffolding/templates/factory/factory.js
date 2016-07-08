(function() {
	'use strict';

	angular
		.module('factory.{{name}}', [])
		.factory('{{nameUpper}}', {{nameUpper}});

	function {{nameUpper}}() {
		return {
			method: method
		};

		function method() {

		}
	}
})();

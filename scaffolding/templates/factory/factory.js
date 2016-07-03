(function() {
	'use strict';

	angular
		.module('service.{{name}}', [])
		.factory('{{nameUpper}}', function() {
			return {
				method: method
			};

			function method() {

			}
		});
})();

(function() {
	'use strict';

	angular
		.module('service.{{name}}', [])
		.service('{{nameUpper}}', function($http, $q) {
			return {
				get: get
			};

			function get() {
				return $q(function(resolve, reject) {
					$http({
						method: 'GET',
						url: '/services/{{name}}/{{name}}.fixture.json'
					})
					.success(function(res) {
						resolve(res.data);
					})
					.error(function(err) {
						reject(err);
					});
				});
			}
		});
})();

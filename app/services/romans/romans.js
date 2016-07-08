(function() {
	'use strict';

	angular
		.module('service.romans', [])
		.service('Romans', function($http, $q) {
			return {
				get: get
			};

			function get() {
				return $q(function(resolve, reject) {
					$http({
						method: 'GET',
						url: '/services/romans/romans.fixture.json',
						cache: true
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

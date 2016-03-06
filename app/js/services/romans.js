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
						url: '/assets/data/roman-data.json',
						cache: true
					})
					.success(function(data) {
						resolve(data.data);
					})
					.error(function(data, status) {
						var errorObj = {
							data: data,
							status: status
						};
						reject(errorObj);
					});
				});
			}
		});
})();

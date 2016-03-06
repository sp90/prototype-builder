(function() {
	'use strict';

	angular
		.module('filter.romanize', [])
		.filter('romanize', romanize)
		.filter('deromanize', deromanize);

	function romanize() {
		return function(value) {
			return value;
		};
	}

	function deromanize() {
		return function(value) {
			console.log('value: ', value);
			return value;
		};
	}
})();

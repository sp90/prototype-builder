(function() {
	'use strict';

	angular
		.module('filter.romanize', [])
		.filter('romanize', romanize)
		.filter('deromanize', deromanize);

	var pairs = [
		[1000, 'M'], [900, 'CM'], [800, 'DCCC'], [700, 'DCC'], [600, 'DC'],
		[500, 'D'], [400, 'CD'], [300, 'CCC'], [200, 'CC'],
		[100, 'C'], [90, 'XC'], [80, 'LXXX'], [70, 'LXX'], [60, 'LX'],
		[50, 'L'], [40, 'XL'], [30, 'XXX'], [20, 'XX'],
		[10, 'X'], [9, 'IX'], [8, 'VIII'], [7, 'VII'], [6, 'VI'],
		[5, 'V'], [4, 'IV'], [3, 'III'], [2, 'II'], [1, 'I'],
	];

	var reversePairs = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	function romanize() {
		return function(number) {
			// Verify type
			if (typeof number !== 'number') { return false; }

			// Prep zero value
			var roman = '';

			// Create map and loop over it
			new Map(pairs).forEach(function(mapRoman, mapNumber) {
				// While our original number is still
				// higher or equal to the map number keep going
				while (number >= mapNumber) {
					// Add our roman number to our final value
					roman += mapRoman;
					// Subtract mapNumber from our input value
					number -= mapNumber;
				}
			});

			// Output roman number
			return roman;
		};
	}

	function deromanize() {
		return function(roman) {
			// Verify type
			if (typeof roman !== 'string') { return false; }

			// Send to uppercase and make into an array
			roman = roman.toUpperCase().split('');

			// Prep zero values
			var number = 0;
			var value = 0;

			// As long as we still have elements in the roman array keep going
			while (roman.length) {
				// Find roman if add the value and remove it from the array we made
				value = reversePairs[roman.shift()];
				// Define if it's a plus or a minus
				number += value * (value < reversePairs[roman[0]] ? -1 : 1);
			}

			// Output number as interger
			return number;
		};
	}
})();

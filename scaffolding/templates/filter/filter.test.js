(function() {
	'use strict';

	describe('{{nameUpper}} filter', function() {
		var $filter;

		beforeEach(function() {
			module('filter.{{name}}');

			inject(function(_$filter_) {
				$filter = _$filter_;
			});
		});

		it('should do something', function() {
			// Some test
		});
	});
})();

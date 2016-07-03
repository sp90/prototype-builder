// jscs:disable validateQuoteMarks
// This is disabled in order to replicate JSON objects

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

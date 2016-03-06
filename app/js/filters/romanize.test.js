// jscs:disable validateQuoteMarks
// This is disabled in order to replicate JSON objects

describe('Roman filter', function() {
	var $filter;

	beforeEach(function() {
		module('filter.romanize');

		inject(function(_$filter_) {
			$filter = _$filter_;
		});
	});

	/**
	 *	Romanize
	 */
	describe('Romanize', function() {
		it('should filter 1 into I', function() {
			var result = $filter('romanize')(1);

			expect(result).to.equal('I');
		});

		it('should filter 4 into IV', function() {
			var result = $filter('romanize')(4);

			expect(result).to.equal('IV');
		});

		it('should filter 6 into IV', function() {
			var result = $filter('romanize')(6);

			expect(result).to.equal('VI');
		});
	})

	/**
	 *	Deromanize
	 */
	describe('Deromanize', function() {
		it('should filter I into 1', function() {
			var result = $filter('deromanize')('I');

			expect(result).to.equal(1);
		});

		it('should filter IV into 4', function() {
			var result = $filter('deromanize')('IV');

			expect(result).to.equal(4);
		});

		it('should filter VI into 6', function() {
			var result = $filter('deromanize')('VI');

			expect(result).to.equal(6);
		});
	});
});

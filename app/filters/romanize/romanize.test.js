// jscs:disable validateQuoteMarks
// This is disabled in order to replicate JSON objects

describe('Roman filter', function() {
	var $filter;

	beforeEach(module('filter.romanize'));
	beforeEach(inject(function(_$filter_) {
		$filter = _$filter_;
	}));

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

		it('should filter 90 into IV', function() {
			var result = $filter('romanize')(90);

			expect(result).to.equal('XC');
		});

		it('should filter 1999 into IV', function() {
			var result = $filter('romanize')(1999);

			expect(result).to.equal('MCMXCIX');
		});

		it('should filter 2444 into IV', function() {
			var result = $filter('romanize')(2444);

			expect(result).to.equal('MMCDXLIV');
		});
	});

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

		it('should filter 90 into IV', function() {
			var result = $filter('deromanize')('XC');

			expect(result).to.equal(90);
		});

		it('should filter 1999 into IV', function() {
			var result = $filter('deromanize')('MCMXCIX');

			expect(result).to.equal(1999);
		});

		it('should filter 2444 into IV', function() {
			var result = $filter('deromanize')('MMCDXLIV');

			expect(result).to.equal(2444);
		});
	});
});

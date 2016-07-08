(function() {
	'use strict';

	describe('Romans service', function () {
		var Romans, $httpBackend;

		beforeEach(module('service.romans'));
		beforeEach(inject(function (_Romans_, _$httpBackend_) {
			Romans = _Romans_;
			$httpBackend = _$httpBackend_;
		}));

		it('should do something', function () {
			// Get fixture
			var fixture = window.__fixtures__['/services/romans/romans.fixture'];
			$httpBackend.whenGET('/services/romans/romans.fixture.json').respond(fixture);

			Romans.get()
				.then(function(result) {
					expect(fixture.data).to.deep.equal(result);
				});

			$httpBackend.flush();
		});
	});
})();

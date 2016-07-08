(function() {
	'use strict';

	describe("{{nameUpper}} service", function () {
		var {{nameUpper}}, $httpBackend;

		beforeEach(module('service.{{name}}'));
		beforeEach(inject(function (_{{nameUpper}}_, _$httpBackend_) {
			{{nameUpper}} = _{{nameUpper}}_;
			$httpBackend = _$httpBackend_;
		}));

		it("should do something", function () {
			// Get fixture
			var fixture = window.__fixtures__['/services/{{name}}/{{name}}.fixture'];
			$httpBackend.whenGET('/services/{{name}}/{{name}}.fixture.json').respond(fixture);

			{{nameUpper}}.get()
				.then(function(result) {
					expect(fixture.data).to.deep.equal(result);
				});

			$httpBackend.flush();
		});
	});
})();

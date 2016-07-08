(function() {
	'use strict';

	describe('{{nameUpper}} factory', function () {
		var factory;

		beforeEach('factory.{{name}}'));
		beforeEach(inject(function({{nameUpper}}) {
			factory = {{nameUpper}};
		}));

		describe('Method', function() {
			it('Should define method', function() {
				expect(factory.method).to.not.be.undefined;
				expect(factory).to.respondTo('method');
			});
		});
	});
})();

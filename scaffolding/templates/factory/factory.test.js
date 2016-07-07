(function() {
	'use strict';

	describe('{{nameUpper}} factory', function () {
		var factory;

		beforeEach(function() {
			module('factory.{{name}}');

			inject(function({{nameUpper}}) {
				factory = {{nameUpper}};
			});
		});

		/**
		 *	Method
		 */
		describe('Method', function() {
			it('Should define method', function() {
				expect(factory.method).to.not.be.undefined;
				expect(factory).to.respondTo('method');
			});
		});
	});
})();

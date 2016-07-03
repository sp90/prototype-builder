(function() {
	// No strict because of babel.js

	var modules = [];

	angular
		.module('controller.{{name}}', modules)
		.controller('{{nameUpper}}Ctrl', {{nameUpper}}Ctrl);

	function {{nameUpper}}Ctrl($scope) {
		var {{name}} = this;

		angular.extend({{name}}, {
			title: '...'
		});
	}
})();

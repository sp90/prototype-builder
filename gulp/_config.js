module.exports = {
	output: 'dist/*',
	sass: [
		'app/sass/**/*'
	],
	html: [
		'app/html/**/*'
	],
	assets: [
		'app/assets/**/*'
	],
	scripts: [
		'app/js/app.js',
		'app/js/services/*.js',
		'app/js/filters/*.js',
		'app/js/directives/*.js',
		'app/js/controllers/*.js'
	],
	scriptsSkip: [
		'!app/js/**/*.test.js',
		'!app/js/**/*.mock.js'
	],
	libs: [
		'app/vendor/lodash/dist/lodash.core.js',
		'app/vendor/angular/angular.js',
		'app/vendor/angular-ui-router/release/angular-ui-router.js'
	]
};

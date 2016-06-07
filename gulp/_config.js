module.exports = {
	output: 'dist/*',
	sass: [
		'app/sass/**/*.scss'
	],
	html: [
		'app/html/**/*.html'
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
		'app/vendor/angular/angular.js',
		'app/vendor/angular-sanitize/angular-sanitize.js',
		'app/vendor/angular-ui-router/release/angular-ui-router.js'
	]
};

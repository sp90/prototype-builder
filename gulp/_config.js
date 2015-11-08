module.exports = {
	sass: [
	    'app/sass/**/*'
	],
	copy: [
	    'app/copy/**/*'
	],
	scripts: [
	    'app/js/app.js',
	    'app/js/services/*.js',
	    'app/js/filters/*.js',
	    'app/js/directives/*.js',
	    'app/js/controllers/*.js'
	],
	libs: [
	    'app/vendor/lodash/dist/lodash.core.js',
	    'app/vendor/angular/angular.js',
	    'app/vendor/angular-ui-router/release/angular-ui-router.js',
	    'app/vendor/angular-animate/angular-animate.js',
	    'app/vendor/angular-aria/angular-aria.js'
	]
};

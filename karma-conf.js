// Karma configuration
// Modified on Sun Mar 06 2017 14:37:13 GMT+0100 (CET)

module.exports = function(config) {
	var filesConfig = require('./gulp/_config');

	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: __dirname,

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			'mocha',
			'chai'
		],

		plugins: [
			'karma-chrome-launcher',
			'karma-mocha',
			'karma-chai',
			'karma-ng-html2js-preprocessor'
		],

		// list of files / patterns to load in the browser
		files: [
			'app/vendor/angular/angular.js',
			'app/vendor/angular-ui-router/release/angular-ui-router.js',

			'app/vendor/angular-mocks/angular-mocks.js',

			'app/js/app.js',
			'app/js/services/*.js',
			'app/js/filters/*.js',
			'app/js/directives/*.js',
			'app/js/controllers/*.js',

			'app/html/**/*'
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/**/*.html': 'ng-html2js'
		},

		ngHtml2JsPreprocessor: {
			stripPrefix: 'app/',
			moduleName: function (htmlPath, originalPath) {
				return htmlPath;
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: [
			'progress'
		],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			'Chrome'
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultanous
		concurrency: Infinity
	});
}
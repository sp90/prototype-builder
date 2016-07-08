// Karma configuration
// Modified on Sun Mar 06 2017 14:37:13 GMT+0100 (CET)

module.exports = function(config) {
	var filesConfig = require('./gulp/_config');
	var files = filesConfig.testLibs
					.concat(filesConfig.libs)
					.concat(filesConfig.scripts)
					.concat(filesConfig.fixtures)
					.concat(filesConfig.html);

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
			'karma-phantomjs-launcher',
			'karma-mocha',
			'karma-chai',
			'karma-ng-html2js-preprocessor',
			'karma-json-fixtures-preprocessor'
		],

		// list of files / patterns to load in the browser
		files: files,

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/**/*.json': 'json_fixtures',
			'app/**/*.html': 'ng-html2js'
		},

		ngHtml2JsPreprocessor: {
			stripPrefix: 'app',
			moduleName: function (htmlPath, originalPath) {
				return htmlPath;
			}
		},

		jsonFixturesPreprocessor: {
			stripPrefix: 'app',
			variableName: '__fixtures__',
			transformPath: function(path) {
				return path + '.js';
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
			'PhantomJS'
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultanous
		concurrency: Infinity,

		phantomjsLauncher: {
			// Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
			exitOnResourceError: true
		}
	});
};

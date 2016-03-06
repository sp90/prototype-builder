// Core modules
var path = require('path');

// Third party modules
var jscs = require('gulp-jscs');

// Import config
var config = require('./_config');

// Linting module
module.exports = function(gulp, livereload) {
	gulp.task('lint', function() {
		return gulp.src(config.scripts)
			.pipe(jscs({
				fix: false,
				configPath: path.join(__dirname, '..', '/.jscsrc')
			}))
			.pipe(jscs.reporter());
	});
};

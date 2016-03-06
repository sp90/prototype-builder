// Core modules
var path = require('path');

// Third party modules
var jscs = require('gulp-jscs');

// Linting module
module.exports = function(gulp) {
	gulp.task('lint', function(){
		return gulp.src(config.scripts)
			.pipe(jscs({
				fix: false,
				configPath: path.join(__dirname, '..', '/.jscsrc')
			}))
			.pipe(jscs.reporter());
	});
};

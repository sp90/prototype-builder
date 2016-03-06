// Import modules
var concat = require('gulp-concat');
var babel = require('gulp-babel');

// Import config
var config = require('./_config');
var scripts = config.scripts
				.concat(config.scriptsSkip);

// Html module
module.exports = function(gulp, livereload) {
	gulp.task('scripts', function() {
		return gulp.src(scripts)
			.pipe(babel())
			.pipe(concat('app.js'))
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});
};

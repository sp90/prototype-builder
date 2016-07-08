// Import modules
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

// Import config
var config = require('./_config');

var env = process.env.NODE_ENV || 'dev';
var live = env === 'prod' || env === 'stag';

// Html module
module.exports = function(gulp, livereload) {
	gulp.task('libs', function() {
		return gulp.src(config.libs)
			.pipe(concat('app-libs.js'))
			.pipe(gulpif(live, uglify()))
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});
};

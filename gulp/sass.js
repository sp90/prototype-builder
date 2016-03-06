// Import modules
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

/**
 *	Prep for uncss (not working due to issue #150)
 *	ref: https://github.com/giakki/uncss/issues/150
 *
 *	var uncss = require('gulp-uncss');
 */

// Import config
var config = require('./_config');

// Sass module
module.exports = function(gulp, livereload) {
	gulp.task('sass', function() {
		return gulp.src(config.sass)
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer())
			// .pipe(uncss({
			// 	html: config.html
			// }))
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});
};

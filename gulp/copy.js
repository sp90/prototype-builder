// Import config
var config = require('./_config');
var del = require('del');
var critical = require('critical').stream;

// Html module
module.exports = function(gulp, livereload) {
	gulp.task('html', function() {
		return gulp.src(config.html)
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});

	gulp.task('html--deploy', function() {
		return gulp.src(config.html)
			.pipe(critical({
				base: 'dist/',
				inline: true,
				css: ['dist/app.css']
			}))
			.pipe(gulp.dest('dist'));
	});

	gulp.task('assets', function() {
		return gulp.src(config.assets)
			.pipe(gulp.dest('dist/assets'))
			.pipe(livereload());
	});

	gulp.task('clean-html-tmp', function () {
		return del(['dist/tmp-**']);
	});

	gulp.task('clean-dist', function () {
		return del(['dist/**']);
	});
};

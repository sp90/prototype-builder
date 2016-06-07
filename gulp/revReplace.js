var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');

module.exports = function(gulp) {
	// Build rev files
	gulp.task('rev', function() {
		return gulp.src([
				'dist/**/*.{css,js,json,html,jpg,gif,png,svg,ico}',
				'!dist/index.html'
			])
			.pipe(rev())
			.pipe(gulp.dest('dist'))
			.pipe(rev.manifest())
			.pipe(gulp.dest('dist'));
	});

	// Replace paths in the following files
	gulp.task('rev-replace', function() {
		var manifest = gulp.src('./dist/rev-manifest.json');

		return gulp.src([
				'dist/**/*.{html,js,css}'
			])
			.pipe(revReplace({
				manifest: manifest
			}))
			.pipe(gulp.dest('dist'));
	});
};

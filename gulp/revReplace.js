var rev = require('gulp-rev');
var imagemin = require('gulp-imagemin');
var revReplace = require('gulp-rev-replace');
var revdel = require('gulp-rev-delete-original');

module.exports = function(gulp, useS3) {
	var awsConf = false;

	if (useS3) {
		try {
			awsConf = require('../.aws-conf.js');
		} catch (e) {
			console.log('[ERROR] .aws-conf.js not found: ', e);
		}
	}

	// Build rev files
	gulp.task('rev', function() {
		return gulp.src([
				'dist/**/*.{css,js,json,html,jpg,gif,png,svg,ico,map}',
				'!dist/index.html'
			])
			.pipe(rev())
			.pipe(revdel())
			.pipe(imagemin())
			.pipe(gulp.dest('dist'))
			.pipe(rev.manifest())
			.pipe(gulp.dest('dist'));
	});

	// Replace paths in the following files
	gulp.task('rev-replace', function() {
		var manifest = gulp.src('./dist/rev-manifest.json');
		var replaceOptions = {
			manifest: manifest,
			replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.json']
		};

		if (awsConf !== false) {
			replaceOptions.prefix = awsConf.url;
		}

		return gulp.src([
				'dist/**/*.{html,js,css,json}'
			])
			.pipe(revReplace(replaceOptions))
			.pipe(gulp.dest('dist'));
	});
};

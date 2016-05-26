// Import modules
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');

// Import config
var config = require('./_config');
var scripts = config.scripts.concat(config.scriptsSkip);

var env = process.env['NODE_ENV'] || 'dev';
var live = env === 'prod' || env === 'staging';

// Html module
module.exports = function(gulp, livereload) {
	var concatConf = {
		newLine: '\n'
	};

	gulp.task('scripts', function() {
		return gulp.src(scripts)
			.pipe(gulpif(live, sourcemaps.init()))
			.pipe(concat('app.js', concatConf))
			.pipe(gulpif(live, uglify()))
			.pipe(gulpif(live, sourcemaps.write('./')))
			.pipe(gulpif(live, replace(/\/\/# sourceMappingURL=.*$/g, '')))
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});
};

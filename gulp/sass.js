// Global modules
var fs  = require('fs');
var path = require('path');

// Import modules
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var yaml = require('js-yaml');
var sassLint = require('gulp-sass-lint');

// Import config
var config = require('./_config');

var env = process.env.NODE_ENV || 'dev';
var live = env === 'prod' || env === 'staging';

// Sass module
module.exports = function(gulp, livereload) {
	var nanoConf = {
		safe: true
	};

	gulp.task('sass', function() {
		return gulp.src(config.sass)
			.pipe(gulpif(live, sourcemaps.init()))
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(gulpif(live, uncss({
				html: ['dist/**/*.html'],
				ignore: [
					/is-/
				]
			})))
			.pipe(gulpif(live, cssnano(nanoConf)))
			.pipe(gulpif(live, sourcemaps.write('./')))
			.pipe(gulpif(live, replace(/\/\/# sourceMappingURL=.*$/g, '')))
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});

	gulp.task('sass-lint', function () {
		var sassLintConfig = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../', '.sass-lint.yml'), 'utf8'));

		return gulp.src(config.sass)
			.pipe(sassLint(sassLintConfig))
			.pipe(sassLint.format());
	});
};

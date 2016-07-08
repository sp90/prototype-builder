// Import native modules
var path = require('path');

// Import modules
var del = require('del');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var gulpDocs = require('gulp-ngdocs');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

// Import config
var config = require('./_config');
var scripts = config.scripts.concat(config.scriptsSkip);

var env = process.env.NODE_ENV || 'dev';
var live = env === 'prod' || env === 'stag';

// Html module
module.exports = function(gulp, livereload) {
	var concatConf = {
		newLine: '\n'
	};

	gulp.task('scripts', function() {
		return gulp.src(scripts)
			.pipe(gulpif(live, sourcemaps.init()))
			.pipe(concat('app.js', concatConf))
			.pipe(ngAnnotate())
			.pipe(gulpif(live, uglify()))
			.pipe(gulpif(live, sourcemaps.write('./')))
			.pipe(gulpif(live, replace(/\/\/# sourceMappingURL=.*$/g, '')))
			.pipe(gulp.dest('dist'))
			.pipe(livereload());
	});

	gulp.task('script-lint', function() {
		return gulp.src(config.scripts)
			.pipe(jscs({
				fix: false,
				configPath: path.join(__dirname, '..', '/.jscsrc')
			}))
			.pipe(jscs.reporter());
	});

	gulp.task('clean-docs', function() {
		// Clean docs before making a new one
		return del(['docs']);
	});

	gulp.task('script-docs', function () {
		var libs = config.libs.concat(config.docLibs);
		var options = {
			scripts: libs,
			loadDefaults: {
				angular: false,
				angularAnimate: false,
				marked: false
			},
			html5Mode: true,
			startPage: '/docs/api',
			title: 'Prototype builder',
			image: 'http://localhost:3000/assets/favicon.ico',
			imageLink: '/docs/api',
			titleLink: '/docs/api'
		};

		return gulp.src(scripts)
			.pipe(gulpDocs.process(options))
			.pipe(gulp.dest('./docs'));
	});

	gulp.task('build-docs', gulp.series('clean-docs', 'script-docs'));
};

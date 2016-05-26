// Include main scripts
var gulp = require('gulp');
var argv = require('yargs').argv;
var livereload = require('gulp-livereload');

// Prep configuration
var config = require('./gulp/_config');
var bumpType = [argv.bump] || ['build'];
var port = argv.p || 8000;


/**
 *  Import modularized sub tasks
 */

// Copy assets and html
require('./gulp/clean')(gulp);

// Copy assets and html
require('./gulp/copy')(gulp, livereload);

// Build Sass to css
require('./gulp/sass')(gulp, livereload);

// Build JS libs
require('./gulp/libs')(gulp, livereload);

// Lint and build JS scripts
require('./gulp/lint')(gulp, livereload);
require('./gulp/scripts')(gulp, livereload);

require('./gulp/revReplace')(gulp);


/**
 *  Setup primary tasks
 */

// Default build
gulp.task('default', gulp.series('clean-dist', gulp.parallel('sass', 'libs', 'lint', 'scripts', 'html', 'assets')));

// Build for deployment
gulp.task('deploy', gulp.series('clean-dist', 'html', gulp.parallel('sass', 'libs', 'scripts', 'assets'), 'html--deploy', 'rev', 'rev-replace', 'clean-html-tmp'));

// Watch files for changes and run tasks
gulp.task('watch', gulp.series('default', function () {
	livereload.listen();

	gulp.watch(config.sass, gulp.parallel('sass'));
	gulp.watch(config.libs, gulp.parallel('libs'));
	gulp.watch(config.scripts, gulp.parallel('scripts', 'lint'));
	gulp.watch(config.html, gulp.parallel('html', 'clean-html-tmp'));
	gulp.watch(config.assets, gulp.parallel('assets'));
}));

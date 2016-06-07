// Include main scripts
var gulp = require('gulp');
var argv = require('yargs').argv;
var livereload = require('gulp-livereload');

// Prep configuration
var config = require('./gulp/_config');
var bumpType = [argv.bump] || ['build'];
var port = argv.p || 8000;

/**
 *	Include gulp tasks
 */

/**
 *  Copy assets and html
 *
 *  Tasks:
 *    - html
 *    - html--deploy
 *    - clean-html-tmp
 *    - clean-dist
 *    - assets
 */
require('./gulp/copy')(gulp, livereload);

/**
 *  Compile sass
 *
 *  Tasks:
 *    - sass
 *    - sass-lint
 */
require('./gulp/sass')(gulp, livereload);

/**
 *  Compile js libs
 *
 *  Tasks:
 *    - libs
 */
require('./gulp/libs')(gulp, livereload);

/**
 *  Compile js scripts
 *
 *  Tasks:
 *    - scripts
 *    - scripts-lint
 *    - build-docs
 *	    - clean-docs
 *	    - script-docs
 */
require('./gulp/scripts')(gulp, livereload);

/**
 *  File revision for cache busting
 *
 *  Tasks:
 *    - rev
 *    - rev-replace
 */
require('./gulp/revReplace')(gulp);


/**
 *  Setup primary tasks
 */

// Default build
gulp.task('default', gulp.series('clean-dist', gulp.parallel('sass-lint', 'sass', 'libs', 'script-lint', 'scripts', 'html', 'assets')));

// Build for deployment
gulp.task('deploy', gulp.series('clean-dist', 'html', gulp.parallel('sass', 'libs', 'scripts', 'assets'), 'html--deploy', 'rev', 'rev-replace', 'clean-html-tmp'));

// Watch files for changes and run tasks
gulp.task('watch', gulp.series('default', function () {
	livereload.listen();

	gulp.watch(config.sass, gulp.parallel('sass', 'sass-lint'));
	gulp.watch(config.libs, gulp.parallel('libs'));
	gulp.watch(config.scripts, gulp.parallel('scripts', 'script-lint'));
	gulp.watch(config.html, gulp.parallel('html', 'clean-html-tmp'));
	gulp.watch(config.assets, gulp.parallel('assets'));
}));

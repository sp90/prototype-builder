// Include main scripts
var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');

// Prep configuration
var config = require('./gulp/_config');
var bumpType = [argv.bump] || ['build'];
var port = argv.p || 8000;

/**
 *  Import modularized tasks
 */	

// Copy assets and html
require('./gulp/copy')(gulp);

// Build Sass to css
require('./gulp/sass')(gulp);

// Build JS libs
require('./gulp/libs')(gulp);

// Lint and build JS scripts
require('./gulp/lint')(gulp);
require('./gulp/scripts')(gulp);

// Serve index file with livereload
require('./gulp/serve')(gulp, port);


/**
 *  Setup group tasks
 */	

// Default build
gulp.task('default', function(cb) {
	runSequence(['sass', 'libs', 'scripts', 'html', 'assets'], cb);
});

// Build for deployment
gulp.task('deploy', function(cb) {
	runSequence(['sass', 'libs', 'scripts', 'html--deploy', 'assets'], 'clean-html-tmp', cb);
});

// Watch files for changes and run tasks
gulp.task('watch', function () {
	runSequence(['default', 'serve']);
	gulp.watch(config.sass, ['sass']);
	gulp.watch(config.libs, ['libs']);
	gulp.watch(config.scripts, ['scripts', 'lint']);
	gulp.watch(config.html, ['html', 'clean-html-tmp']);
	gulp.watch(config.assets, ['assets']);
});
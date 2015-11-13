// Include gulp
    var gulp = require('gulp');
    var argv = require('yargs').argv;
    var runSequence = require('run-sequence');

// Get/set variables
	var config = require('./gulp/_config');
	var bumpType = [argv.bump] || ['build'];
	var port = argv.p || 8000;

///
///	 Import modularized tasks
///

	// Imports Copy (copy assets and html)
		require('./gulp/copy')(gulp);

	// Imports Sass
		require('./gulp/sass')(gulp);
		
	// Imports Scripts
		require('./gulp/scripts')(gulp);
		require('./gulp/libs')(gulp);

	// Imports Bump
		require('./gulp/bump')(gulp, bumpType);

	// Imports Bump
		require('./gulp/manifest')(gulp);

	// Imports Serve
		require('./gulp/serve')(gulp, port);

///
///  Setup group tasks
///	
	
	// Creates a default build task
		gulp.task('default', function(cb) {
		    runSequence(['sass', 'libs', 'scripts', 'html', 'assets', 'manifest'], cb);
		});

	// Creates a default build task
		gulp.task('deploy', function(cb) {
		    runSequence(['sass', 'libs', 'scripts', 'html--deploy', 'assets', 'manifest'], 'clean-html-tmp', cb);
		});

	// Creates a release build task (adds a version bump)
		gulp.task('release', function(cb) {
		    runSequence(['deploy', 'bump'], cb);
		});

	// Creates a watch task to watch files and build async
		gulp.task('watch', function () {
			runSequence(['default', 'serve']);
		    gulp.watch(config.sass, ['sass']);
		    gulp.watch(config.libs, ['libs']);
		    gulp.watch(config.scripts, ['scripts']);
		    gulp.watch(config.html, ['html', 'clean-html-tmp']);
		    gulp.watch(config.assets, ['assets']);
		});
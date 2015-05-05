// Import modules
    var server = require('gulp-server-livereload');

// Takana module
	module.exports = function(gulp){
		gulp.task('serve', function() {
		  gulp.src('dist')
		    .pipe(server({
				livereload: true,
				directoryListing: false,
				defaultFile: 'layout.html'
		    }));
		});
	};
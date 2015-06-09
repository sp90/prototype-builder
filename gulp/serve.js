// Import modules
    var server = require('gulp-server-livereload');

// Takana module
	module.exports = function(gulp, port){
		gulp.task('serve', function() {
		  gulp.src('dist')
		    .pipe(server({
				livereload: true,
				directoryListing: false,
				defaultFile: 'layout.html',
				port: parseInt(port)
		    }));
		});
	};
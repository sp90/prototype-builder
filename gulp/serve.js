// Import modules
var server = require('gulp-server-livereload');

// Takana module
module.exports = function(gulp, port) {
	gulp.task('serve', function() {
		return gulp.src('dist')
			.pipe(server({
				livereload: true,
				directoryListing: false,
				defaultFile: 'index.html',
				port: parseInt(port)
			}));
	});
};

// Import modules
	var config = require('./_config');
	var manifest = require('gulp-manifest');

// Takana module
	module.exports = function(gulp){
		gulp.task('manifest', function(){
		  	return gulp.src([config.output])
			    .pipe(manifest({
					hash: true,
					preferOnline: true,
					filename: 'app.manifest',
					exclude: 'app.manifest'
			    }))
			    .pipe(gulp.dest(config.output));
		});
	};
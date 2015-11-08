// Import config
	var config = require('./_config');

// Html module
	module.exports = function(gulp){
		gulp.task('html', function(){
	        return gulp.src(config.html)
	            .pipe(gulp.dest('dist'));
        });
		gulp.task('assets', function(){
	        return gulp.src(config.assets)
	            .pipe(gulp.dest('dist/assets'));
        });
    };
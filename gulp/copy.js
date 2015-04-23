// Import config
	var config = require('./config');

// Html module
	module.exports = function(gulp){
		gulp.task('copy', function(){
	        return gulp.src(config.copy)
	            .pipe(gulp.dest('dist'));
        });
    };
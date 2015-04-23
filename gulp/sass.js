// Import modules
    var sass = require('gulp-sass');

// Import config
	var config = require('./config');

// Sass module
	module.exports = function(gulp){
		gulp.task('sass', function(){
		    return gulp.src(config.sass)
		        .pipe(sass({errLogToConsole: true}))
		        .pipe(gulp.dest('dist/css'));
	    });
	};
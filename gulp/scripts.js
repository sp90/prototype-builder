// Import modules
    var concat = require('gulp-concat');

// Import config
	var config = require('./_config');

// Html module
	module.exports = function(gulp) {
		gulp.task('scripts', function(){
	        return gulp.src(config.scripts)
	            .pipe(concat('app.js'))
	            .pipe(gulp.dest('dist/js'));
        });
    };
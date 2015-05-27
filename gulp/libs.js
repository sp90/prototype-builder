// Import modules
    var concat = require('gulp-concat');

// Import config
	var config = require('./_config');

// Html module
	module.exports = function(gulp) {
		gulp.task('libs', function(){
	        return gulp.src(config.libs)
	            .pipe(concat('app-libs.js'))
	            .pipe(gulp.dest('dist/js'));
        });
    };
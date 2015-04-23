// Import modules
	var bump = require('gulp-bump');

// Import config
	var config = require('./config');

// Bump module
	module.exports = function(gulp, bumpType){
		gulp.task('bump', function(){
			return gulp.src('./package.json')
				.pipe(bump({type:bumpType}))
				.pipe(gulp.dest('./'));
		});
	};
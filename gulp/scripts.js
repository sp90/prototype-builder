// Import modules
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');

// Import config
var config = require('./_config');

// Html module
module.exports = function(gulp) {
	gulp.task('scripts', function(){
		return gulp.src(config.scripts)
			.pipe(babel())
			.pipe(concat('app.js'))
			.pipe(gulp.dest('dist'));
	});
};
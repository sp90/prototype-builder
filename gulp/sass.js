// Import modules
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Import config
var config = require('./_config');

// Sass module
module.exports = function(gulp){
	gulp.task('sass', function(){
	    return gulp.src(config.sass)
	        .pipe(sass().on('error', sass.logError))
	    	.pipe(autoprefixer())
	        .pipe(gulp.dest('dist'));
    });
};
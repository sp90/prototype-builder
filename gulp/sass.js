// Import modules
    var sass = require('gulp-sass');
    var uncss = require('gulp-uncss');
    var autoprefixer = require('gulp-autoprefixer');

// Import config
	var config = require('./_config');

// Sass module
	module.exports = function(gulp){
		gulp.task('sass', function(){
		    return gulp.src(config.sass)
		        .pipe(sass().on('error', sass.logError))
		    	.pipe(autoprefixer())
		    	.pipe(uncss({
		            html: config.html
		        },{
			        ignore       : ['^(rt--|ng-)'],
			        report       : false
			    }))
		        .pipe(gulp.dest('dist/css'));
	    });
	};
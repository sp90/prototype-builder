// Import modules
    var sass = require('gulp-sass');
	var concat = require('gulp-concat');
    var autoprefixer = require('gulp-autoprefixer');
    //Not inplemented due to error https://github.com/giakki/uncss/issues/150
    //var uncss = require('gulp-uncss'); 
	// .pipe(uncss({
 //        html: config.html
 //    },{
    //     ignore       : ['^(rt--|ng-)'],
    //     report       : false
    // }))

// Import config
	var config = require('./_config');

// Sass module
	module.exports = function(gulp){
		gulp.task('sass', function(){
			console.log("config.sass: ", config.sass);
			console.log("config.html: ", config.html);
		    return gulp.src(config.sass)
		        .pipe(sass().on('error', sass.logError))
		    	.pipe(autoprefixer())
		        .pipe(gulp.dest('dist/css'));
	    });
	};
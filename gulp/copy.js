// Import config
var config = require('./_config');
var clean = require('gulp-clean');
var critical = require('critical').stream;

// Html module
module.exports = function(gulp){
	gulp.task('html', function(){
		return gulp.src(config.html)
			.pipe(gulp.dest('dist'));
	});
	gulp.task('html--deploy', function(){
		return gulp.src(config.html)
			.pipe(critical({base: 'dist/', inline: true, css: ['dist/css/app.css']}))
			.pipe(gulp.dest('dist'));
	});
	gulp.task('assets', function(){
		return gulp.src(config.assets)
			.pipe(gulp.dest('dist/assets'));
	});
	gulp.task('clean-html-tmp', function () {
		return gulp.src('dist/tmp-**', {read: false})
			.pipe(clean());
	});
	 
};
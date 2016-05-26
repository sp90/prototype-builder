var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');

module.exports = function(gulp) {
	gulp.task('rev', function(){
	  return gulp.src([
	  		'dist/**/*.css',
	  		'dist/**/*.js'
	  	])
	    .pipe(rev())
	    .pipe(gulp.dest('dist'))
	    .pipe(rev.manifest())
	    .pipe(gulp.dest('dist'))
	})

	gulp.task('rev-replace', function(){
	  var manifest = gulp.src('./dist/rev-manifest.json');

	  return gulp.src(['dist/index.html'])
	    .pipe(revReplace({
	    	manifest: manifest
	    }))
	    .pipe(gulp.dest('dist'));
	});
};

// Import modules
var del = require('del');
//var clean = require('gulp-clean');

// Import config
var config = require('./_config');

// Sass module
module.exports = function(gulp) {
	gulp.task('clean-dist', function () {
		return del(['dist/**']);
	});
};

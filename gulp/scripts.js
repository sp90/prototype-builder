// Import modules
    var concat = require('gulp-concat');
    var babel = require('gulp-babel');
    var ngAnnotate = require('gulp-ng-annotate');
    var jshint = require('gulp-jshint');
    var stylish = require('jshint-stylish');

// Import config
	var config = require('./_config');

// Html module
	module.exports = function(gulp) {
		gulp.task('scripts', function(){
	        return gulp.src(config.scripts)
	        	.pipe(jshint({
				    "bitwise": true,
				    "camelcase": true,
				    "curly": true,
				    "eqeqeq": true,
				    "es3": false,
				    "forin": true,
				    "freeze": true,
				    "immed": true,
				    "indent": 4,
				    "latedef": "nofunc",
				    "newcap": true,
				    "noarg": true,
				    "noempty": true,
				    "nonbsp": true,
				    "nonew": true,
				    "plusplus": false,
				    "quotmark": "single",
				    "undef": true,
				    "unused": false,
				    "strict": false,
				    "maxparams": 10,
				    "maxdepth": 5,
				    "maxstatements": 40,
				    "maxcomplexity": 8,
				    "maxlen": 120,

				    "asi": false,
				    "boss": false,
				    "debug": false,
				    "eqnull": true,
				    "esnext": false,
				    "evil": false,
				    "expr": false,
				    "funcscope": false,
				    "globalstrict": false,
				    "iterator": false,
				    "lastsemic": false,
				    "laxbreak": false,
				    "laxcomma": false,
				    "loopfunc": true,
				    "maxerr": false,
				    "moz": false,
				    "multistr": false,
				    "notypeof": false,
				    "proto": false,
				    "scripturl": false,
				    "shadow": false,
				    "sub": true,
				    "supernew": false,
				    "validthis": false,
				    "noyield": false,

				    "browser": true,
				    "node": true,

				    "globals": {
				        "angular": false,
				        "$": false
				    }
				}))
				.pipe(jshint.reporter(stylish))
	        	.pipe(babel())
	        	.pipe(ngAnnotate())
	            .pipe(concat('app.js'))
	            .pipe(gulp.dest('dist/js'));
        });
    };
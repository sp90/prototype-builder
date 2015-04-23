// Import modules
	var path = require('path');
    var takana = require('takana');


// Takana module
	module.exports = function(gulp){

		gulp.task('takana', function() {
			takana.run({
				path: path.join(__dirname, '../')
			});
		});
	};


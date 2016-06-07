/**
 *	This one was abit tricky until i found this guide on how to use AWS
 *	https://medium.com/@WoloxEngineering/deploy-your-angularjs-app-to-aws-s3-with-ssl-3635a62533ab#.gpunuvxbj
 *
 *  AWS Docs are terrible btw!!!
 */

// Import native modules
var fs = require('fs');
var path = require('path');

// Import modules
var awspublish = require('gulp-awspublish');

// Import config
var config = require('./_config');

// Copy to S3
module.exports = function(gulp, useS3) {
	var awsKeys = false;
	var headers = {
		'Cache-Control': 'max-age=315360000, no-transform, public'
	};

	if (useS3) {
		try {
			awsKeys = require('../.aws-keys.js');
		} catch (e) {
			console.log('[ERROR] .aws-keys.js not found: ', e);
		}
	}

	gulp.task('copyToS3', function() {
		// If the aws file are unavailable do nothing
		if (!awsKeys) {
			// To setup permissions, and policies check the article linked in the top
			console.log('Setup your aws keys, and bucket correctly guidelines are found in the link in gulp/cdn-s3.js file');
			return gulp.src('./dist/**');
		}

		var publisher = awspublish.create(awsKeys);

		return gulp.src([
				'./dist/**',
				'!dist/**/*.test*',
				'!dist/rev-manifest.json',
			])
			.pipe(awspublish.gzip())
			.pipe(publisher.publish(headers))
			.pipe(publisher.cache())
			.pipe(publisher.sync())
			.pipe(awspublish.reporter());
	});
};

// Native modules
var fs = require('fs');
var path = require('path');

// External modules
var _ = require('lodash');
var glob = require("glob");
var chalk = require('chalk');

// Basic config
var config = require('./_config');
var args = process.argv.slice(2);
var baseProjectPath = path.join(__dirname, '../');
var baseTemplatePath = path.join(__dirname, '/templates');
var type = args[0];

// Test if args are passed?
if (1 >= args.length) {
	console.log(chalk.red('You need to give the module a name'));
	console.log(chalk.yellow('npm run add:' + type + ' NAME'));
	return;
}

var dataObj = {
	name: args[1],
	nameUpper: capitalizeFirstLetter(args[1]),
	nameLower: args[1].toLowerCase(),
	nameSlugified: slugify(args[1])
};

// Setup based on config
if (!_.isUndefined(config.interpolate)) {
	_.templateSettings.interpolate = config.interpolate;
}

var module = config.modules.filter(function (obj) {
    return obj.type === type;
})[0];

build(module, function(filesPath, outputPath) {
	var arrLength = filesPath.length;

	_.map(filesPath, function(filePath, i) {
		var pathParts = filePath.split('/');
		var pathEnding = pathParts[pathParts.length - 1];
		var n = pathEnding.indexOf('.');
		var resultEnding = pathEnding.substring(n);

		read(filePath, function(fileContent) {
			var moduleDirName = type === 'constant' ? path.join(__dirname, '../', outputPath) : path.join(__dirname, '../', outputPath, dataObj.name);
			var setPath = resultEnding === '.scss' ?  path.join(moduleDirName, '_' + dataObj.name + resultEnding) : path.join(moduleDirName, dataObj.name + resultEnding);

			if (!fs.existsSync(moduleDirName) && type !== 'constant'){
			    fs.mkdirSync(moduleDirName);
			}


			write(setPath, _.template(fileContent)(dataObj), function() {
				// Only show logs on the finish of the last file
				if (arrLength - 1 === i) {
					console.log(chalk.green('The new module has been created'));
					console.log(chalk.bold.green('the module name is: ' + type + '.' + dataObj.name));
					console.log('-------------------------------');

					if (type === 'controller') {
						console.log(chalk.yellow('Remember to bind the sass file in app.scss in the root application folder'));
						console.log(chalk.yellow('And Bind your controller in app.js'));
					} else if (type === 'component') {
						console.log(chalk.yellow('Remember to bind the sass file in app.scss in the root application folder'));
						console.log(chalk.yellow('And add this component as a dependency in the controller you need it'));
					} else {
						console.log(chalk.yellow('Remember to bind the dependency where ever you need this module'));
					}
				}
			});
		});
	});
});

function build(module, callback) {
	var modulePath = path.join(baseTemplatePath, module.type);
	var moduleFilesGlob = modulePath + '/*.' + module.fileTypes;

	glob(moduleFilesGlob, function (err, filesPath) {
		if (err) {
			return console.log(chalk.red(err));
		}

		callback(filesPath, module.output);
	});
}

function read(path, cb) {
	fs.readFile(path, 'utf8', function(err, data) {
		if (err) {
			return console.log(chalk.red(err));
		}

		cb(data);
	});
}

function write(path, content, cb) {
	fs.writeFile(path, content, function (err,data) {
	  if (err) {
	    return console.log(chalk.red(err));
	  }

	  cb(data);
	});
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

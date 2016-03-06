[![Join the chat at https://gitter.im/sp90/prototype-builder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sp90/prototype-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Prototype-builder v1.1

This is a prototype-boilerplate which is a good way to start small html prototypes for show. With build-in seamless workflow

## What

This is build to develop small applications, so its a step between codepen.io, and an full blown app. This is a project you should clone and build and test out stuff. 

### Getting start

**Clone, and install**

```
	// Development repo
	cd /your/dev/folder

	// Clone the project
	git clone https://github.com/sp90/prototype-builder.git
	
	// Go into the project
	cd prototype-builder
	
	// Install project files
	npm install

	// Get third party libs
	bower install
```

**Build, and watch**

```
	// Start node server on port 3000
	npm start
	
	// Build files
	gulp

	// Watch for changes
	gulp watch
```

### Test your code

```
	karma start karma-conf.js
```


### What's included

* Gulp
	* ES6 -> ES5 with babel, fixes stuff like strict mode
	* Js lint
* Livereload on all type of files
* Node to serve html files
* Sass
* JS
	* Testing
		* Karma
		* Mocha
		* Chai
	* Angular
		* ui-router

### Todo's

* Add uncss #Not done due to issue in uncss with {{ hbs }}
* Add a clean operation
* Add ngdocs or similar to build docs
* Add sourcemaps for both sass and javascript
* Add minification for js(uglify) & css(gulp-cssnano) 
* Add default seo support
* Add static site generator
* Better architecture for multiple apps
* Easy to deploy
* Delete existing dist folder on a bump and create a new with the new updates
* Find out if this needs a dashboard as a very small cms for easy changes
* Enviroment variables
* Cache busting on files (toggle by settings)

Best regards

**Nomis**


Follow me my blog <a href="http://nomis.dk">nomis.dk</a>

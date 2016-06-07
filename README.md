[![Join the chat at https://gitter.im/sp90/prototype-builder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sp90/prototype-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Prototype-builder v2.1.0

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
	* Js lint
	* Livereload
* Node to serve html files
* Dockerfile to containerize
* Sass
	* Linting
	* Sourcemaps
	* Cssnano
	* Uncss
	* Cache busting
* JS
	* Cache busting
	* Linting
	* Uglify
	* Sourcemaps
	* Documentation - ngdocs
		* Clean docs folder on build
	* Testing
		* Karma
		* Mocha
		* Chai
	* Angular
		* ui-router
* Add file revisions on prod build
* Clean dist on build
* Image minification
* Enviroment based build processes available: (prod, stag, dev) - default "dev"

### Next up Todo's

* Html and Assets revision control
* Support for vendor css files
* Support move assets to s3 bucket (toggle in settings)
* Default seo support
* Add a change log
* Contribution guide
* Move guides and more to wiki
* Build a yoman generator for angular components

Best regards

**Nomis**


Follow me my blog <a href="http://nomis.dk">nomis.dk</a>

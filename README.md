[![Join the chat at https://gitter.im/sp90/prototype-builder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sp90/prototype-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Prototype-builder v3.2.2

Just updated to 3.0.0, this is due to breaking changes, done with reformatting the application structure - im now working on rewriting all this in ES6 aswell

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

**Test your code**

```
	// Run tests
	npm test
	
	// Run watch on tests
	npm run test:watch
```

### Project CLI

```
	// These are used to generate modules
	// Remember to add a name to the module
	npm run add:controller MODULENAME | npm run add:con MODULENAME
	npm run add:component MODULENAME | npm run add:com MODULENAME
	npm run add:service MODULENAME | npm run add:ser MODULENAME
	npm run add:factory MODULENAME | npm run add:fac MODULENAME
	npm run add:constant MODULENAME | npm run add:cons MODULENAME
	npm run add:filter MODULENAME | npm run add:fil MODULENAME
```

### Deployment

```
	// These will build based on the enviroment you wanna build to
	// Right now prod and staging is the same, you could change it for your project
	// You need to set it up for s3 or just build it and serve in your project folder
	npm run deploy:dev
	npm run deploy:stag
	npm run deploy:prod
```


### What's included

* Gulp
	* Livereload
* Node to serve dist folder and docs
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
	* NgAnnotate
	* Sourcemaps
	* Documentation - ngdocs
		* Clean docs folder on build
	* Testing
		* Karma
		* Mocha
		* Chai
	* Angular
		* ui-router
* File revision
	* If s3 assets is turned on add s3 bucket url as prefix
	* On following types
		* html
		* js
		* json
		* css
		* jpg
		* gif
		* ico
		* png
		* svg
		* map
	* Url replacement in following types
		* html
		* css
		* js
* Critical css (Manually styleable)
* Support move assets to s3 bucket
* Clean dist on build
* Image minification
* Support for vendor css files
* Dynamicly get libs for karma config
* Enviroment based build processes available: (prod, stag, dev) - default "dev"
* Component based structure
* Project based CLI
* Angular loaded from external CDN
* RevReplace now also supported for json fixtures

### Next up Todo's

* Rewrite starting app to be a simple hello world application with only nesseary content NG1 in ES6
* Default seo support
* Add a change log
* Contribution guide
* Move guides and more to wiki

Best regards

**Nomis**


Follow me my blog <a href="http://nomis.dk">nomis.dk</a>

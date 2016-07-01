[![Join the chat at https://gitter.im/sp90/prototype-builder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sp90/prototype-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Prototype-builder v3.0.0

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

	// Deploy for revReplace, and aws (remember aws keys and conf setup)
	gulp deploy

	// Deploy for minifying scripts on deploy (envs can be: prod || staging)
	NODE_ENV=prod gulp deploy
```

### Test your code

```
	npm test
```

### Project CLI - (COMMING SOON)

```
	// It's going to look similar to this

	npm run add:controller COMPNAME | npm run add:ctrl COMPNAME
	npm run add:component COMPNAME | npm run add:comp COMPNAME
	npm run add:service COMPNAME | npm run add:ser COMPNAME
	npm run add:factory COMPNAME | npm run add:fac COMPNAME
	npm run add:fixture COMPNAME | npm run add:fix COMPNAME
	npm run add:filter COMPNAME | npm run add:fil COMPNAME
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

### Next up Todo's

* Add a project based CLI
* Move angular, to external CDN with fallback
* Rewrite starting app to be a simple hello world application with only nesseary content NG1 in ES6
* Default seo support
* Build a yeoman generator or npm cli for angular components
* Add a change log
* Contribution guide
* Move guides and more to wiki

### Known issues

* RevReplace in fixtures/*.{json}

Best regards

**Nomis**


Follow me my blog <a href="http://nomis.dk">nomis.dk</a>

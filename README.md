[![Join the chat at https://gitter.im/sp90/prototype-builder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sp90/prototype-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Prototype-builder v1.1

This is a prototype-boilerplate which is a good way to start small html prototypes for show. With build-in seamless workflow

## What

This is build to develop small applications, so its a step between codepen.io, and an full blown app. This is a project you should clone and build and test out stuff. 

### Getting start

**Clone, and install**

```
	cd /your/dev/folder
	git clone https://github.com/sp90/prototype-builder.git
	cd prototype-builder
	npm install
```

**Build, and watch**

```
	gulp or gulp watch
	gulp watch also run the default task
```

**Release** 

```
	// Valid values for bump: `major|minor|patch|prerelease`
	gulp release --bump=major
```


### What's included

* Gulp
	* ES6 -> ES5 with babel, fixes stuff like strict mode
	* Js Hint
	* Annotations in angular
* Livereload on all type of files
* Serve files
* Sass
* JS
	* Lodash core script
	* Angular
		* ui-router
		* angular-animate
		* angular-aria

Best regards

**Nomis**


Follow me my blog <a href="http://nomis.dk">nomis.dk</a>

# prototype-builder
This is a prototype-boilerplate which is a good way to start small html prototypes for show. With build-in seamless workflow

### Why

Why i build this prototype boilerplate if you will, is to enable myself to create new apps in the same enviroment with a seamless workflow every time. It updates both html, css & javascript on the fly which is a really nice feature.

### How

How can you build a server ontop of this, its actually pretty easy you can build a node service ontop where you accept CORS and run it on another port, while this service runs you can build them devided this also gains some benefits on the deployment side, that you can host server in one docker container, and the frontend in another container.

## What

This is build to develop small applications, so its a step between codepen.io, and an full blown app. This is a project you should clone and build and test out stuff. 

### Getting start

**Clone, and install**

```
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

**Config**

you find the config file in ./gulp/_config.js, this is where you setup the gulp paths everything else should run seamless, and this is the only file you need to change for it to run smooth.

Besides this all the modules in ./gulp is configuable and you can drop in new features as sourcemaps or autoprefixer if you need.


### What's included

* Gulp
* Livereload
* Server that serves an html file
* Sass
	* itcss
	* bourbon
	* some extra mixins 
	* angular-material
* JS
	* Jquery
	* Lodash
	* Angular
		* ui-router
		* angular-animate
		* angular-aria
		* angular-material

Best regards

**Nomis**


Follow me my blog <a href="nomis.dk">nomis.dk</a>

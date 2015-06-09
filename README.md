[![Join the chat at https://gitter.im/sp90/prototype-builder](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sp90/prototype-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# prototype-builder

This is a prototype-boilerplate which is a good way to start small html prototypes for show. With build-in seamless workflow

### Why

Why i build this prototype boilerplate if you will, is to enable myself to create new apps in the same enviroment with a seamless workflow every time. It updates both html, css & javascript on the fly which is a really nice feature.

### How

How can you build a server ontop of this, its actually pretty easy you can build a node service ontop where you accept CORS and run it on another port, while this service runs you can build them devided this also have some benefits on the deployment stage, that you can host server in one docker container, and the frontend in another container, and therefore spin up the amount of containers your app needs, so lets say you have an app which might have 10.000 request a min for frontend you might need to spin up multiple servers with the frontend, and then you might have a call once in a while a server call you can then spin up only 1 Api server.

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

**Config**

you find the config file in ./gulp/_config.js, this is where you setup the gulp paths everything else should run seamless, and this is the only file you need to change for it to run smooth.

Besides this all the modules in ./gulp is configuable and you can drop in new features as sourcemaps or autoprefixer if you need.


### What's included

* Gulp
	* ES6 -> ES5 with babel and more
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


Follow me my blog <a href="http://nomis.dk">nomis.dk</a>

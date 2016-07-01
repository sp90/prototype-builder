module.exports = {
	output: 'dist/*',
	cssLibs: [],
	sass: [
		'app/**/*.scss'
	],
	html: [
		'app/index.html',
		'app/**/*.html'
	],
	images: [
		'app/images/**/*.{jpg,gif,png,svg,ico}'
	],
	assets: [
		'app/assets/**/*'
	],
	fixtures: [
		'app/fixtures/**/*'
	],
	scripts: [
		'app/app.js',
		'app/services/**/*.js',
		'app/filters/**/*.js',
		'app/components/**/*.js',
		'app/controllers/**/*.js'
	],
	scriptsSkip: [
		'!app/**/*.test.js',
		'!app/**/*.mock.js'
	],
	libs: [
	    'node_modules/fg-loadcss/src/loadCSS.js',
	    'node_modules/fg-loadcss/src/cssrelpreload.js',
		'node_modules/angular/angular.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js'
	],
	docLibs: [
		'node_modules/angular-animate/angular-animate.js',
		'node_modules/marked/lib/marked.js'
	],
	testLibs: [
		'node_modules/angular-mocks/angular-mocks.js',
		'node_modules/babel-polyfill/dist/polyfill.min.js'
	]
};

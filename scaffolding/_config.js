module.exports = {
	interpolate: /{{([\s\S]+?)}}/g,
	modules: [
		{
			type: 'service',
			output: 'app/services/',
			fileTypes: '{js,test.js}'
		},
		{
			type: 'filter',
			output: 'app/filters/',
			fileTypes: '{js,test.js}'
		},
		{
			type: 'factory',
			output: 'app/factories/',
			fileTypes: '{js,test.js}'
		},
		{
			type: 'constant',
			output: 'app/constants/',
			fileTypes: '{js,test.js}'
		},
		{
			type: 'component',
			output: 'app/components/',
			fileTypes: '{scss,js,html}' // ,test.js
		},
		{
			type: 'controller',
			output: 'app/controllers/',
			fileTypes: '{scss,js,html}' // ,test.js
		}
	]
};

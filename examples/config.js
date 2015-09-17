'use strict';

module.exports = {
	'env': {
		'node': true
	},
	'plugins': [
		// Declare the plugin:
		'no-unsafe-regex'
	],
	'rules': {
		'no-path-concat': 2,
		'no-process-exit': 0,
		'no-sync': 1,
		'no-mixed-requires': [ 2, false ],

		// Prefix a plugin rule with `{{plugin_name}}/`:
		'no-unsafe-regex/no-unsafe-regex': 2
	}
};

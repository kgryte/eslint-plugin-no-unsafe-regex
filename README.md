Rules: No Unsafe Regex
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) rules to disallow [unsafe](https://github.com/substack/safe-regex) regular expressions.


## Installation

``` bash
$ npm install eslint-plugin-no-unsafe-regex
```


## Usage

### Plugin

To use the [plugin](http://eslint.org/docs/user-guide/configuring#configuring-plugins) in an `.eslintrc` file,

``` javascript
{
	'plugins': [
		'no-unsafe-regex'
	]
}
```

where `no-unsafe-regex` is shorthand for `eslint-plugin-no-unsafe-regex`. To configure plugin rules,

``` javascript
{
	'plugins': [
		'no-unsafe-regex'
	],
	'rules': {
		'no-unsafe-regex/no-unsafe-regex': 2
	}
}
```

where a [plugin](http://eslint.org/docs/user-guide/configuring#configuring-plugins) rule must be prefixed with the [plugin](http://eslint.org/docs/user-guide/configuring#configuring-plugins) name and a `/`; e.g., `no-unsafe-regex/<rule>`.


### Module

``` javascript
var plugin = require( 'eslint-plugin-no-unsafe-regex' );
```

#### plugin

[ESLint](http://eslint.org/) rules to disallow [unsafe](https://github.com/substack/safe-regex) regular expressions.

``` javascript
console.dir( plugin );
/*
	{
		'rules': {
			'no-unsafe-regex': <rule>
		},
		'rulesConfig': {
			'no-unsafe-regex': 2
		}
	}
*/
```


## Notes

*	In order to use the [plugin](http://eslint.org/docs/user-guide/configuring#configuring-plugins), the plugin __must__ first be installed as a `node_modules` dependency.
*	The plugin __only__ validates [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) __literals__ and regular expressions created using the [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) constructor and __literal__ arguments.

	``` javascript
	var re;

	// Validated:
	re = /beep/;

	// Validated:
	re = new RegExp( 'beep', 'i' );

	// Not validated:
	str = 'beep';
	re = new RegExp( str, 'i' );

	// Not validated:
	re = new RegExp( new Array( 5 ).join( 'ab' ) );
	```

	Validating regular expressions created using non-literal arguments would require reconstructing an execution context, which is beyond the scope of this module. For example, consider

	``` javascript
	var getStr = require( './path/to/my/string' ),
		str = getStr();

	var re = new RegExp( str );
	```

	If the return value of `getStr` is dynamic, validation is impossible.



## Examples

``` javascript
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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-plugin-no-unsafe-regex.svg
[npm-url]: https://npmjs.org/package/eslint-plugin-no-unsafe-regex

[travis-image]: http://img.shields.io/travis/kgryte/eslint-plugin-no-unsafe-regex/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-plugin-no-unsafe-regex

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-plugin-no-unsafe-regex/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-plugin-no-unsafe-regex?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-plugin-no-unsafe-regex.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-plugin-no-unsafe-regex

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-plugin-no-unsafe-regex.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-plugin-no-unsafe-regex

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-plugin-no-unsafe-regex.svg
[github-issues-url]: https://github.com/kgryte/eslint-plugin-no-unsafe-regex/issues

Rules: No Unsafe Regex
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) rules to disallow [unsafe](https://github.com/substack/safe-regex) regular expressions.


## Installation

``` bash
$ npm install eslint-plugin-no-unsafe-regex
```


## Usage

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
		}
	}
*/
```


## Examples

``` javascript

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

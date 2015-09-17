'use strict';

// RULES //

var rules = {};

/**
* RULE: no-unsafe-regex
*	Rule to detect unsafe regular expressions.
*/
rules[ 'no-unsafe-regex' ] = require( './no-unsafe-regex.js' );


// EXPORTS //

module.exports = rules;

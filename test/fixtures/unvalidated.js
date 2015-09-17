'use strict';

var cases = [],
	test;

// Test cases taken from https://github.com/substack/safe-regex/blob/6ecfef8db092c4b0d5dd8c7ac978ca0ebdd52889/test/regex.js
test = {
	'code': 'var re = new RegExp( new Array( 26 ).join( "a?" ) + new Array( 26 ).join( "a" ) );'
};
cases.push( test );

test = {
	'code': 'var re = new RegExp( new Array( 27 ).join( "a?" ) + new Array( 27 ).join( "a" ) );'
};
cases.push( test );

test = {
	'code': 'var str = "(.*){1,32000}[bc]"; var re = RegExp( str );'
};
cases.push( test );


// EXPORTS //

module.exports = cases;

'use strict';

var valid = [],
	test;

// Test cases taken from https://github.com/substack/safe-regex/blob/6ecfef8db092c4b0d5dd8c7ac978ca0ebdd52889/test/regex.js
test = {
	'code': 'var re = /beep/;'
};
valid.push( test );

test = {
	'code': 'var re = new RegExp( "\\bOakland\\b" );'
};
valid.push( test );

test = {
	'code': 'var re = /\\b(Oakland|San Francisco)\\b/i;'
};
valid.push( test );

test = {
	'code': 'var re = /^\\d+1337\\d+$/i;'
};
valid.push( test );

test = {
	'code': 'var re = /^\\d+(1337|404)\\d+$/i;'
};
valid.push( test );

test = {
	'code': 'var re = /^\\d+(1337|404)*\\d+$/i;'
};
valid.push( test );

test = {
	'code': 'var re = new RegExp( new Array( 26 ).join( "a?" ) + new Array( 26 ).join( "a" ) );'
};
valid.push( test );


// EXPORTS //

module.exports = valid;

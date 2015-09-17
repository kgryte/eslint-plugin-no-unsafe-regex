'use strict';

var invalid = [],
	test;

// Test cases taken from https://github.com/substack/safe-regex/blob/6ecfef8db092c4b0d5dd8c7ac978ca0ebdd52889/test/regex.js
test = {
	'code': 'var re = /^(a?){25}(a){25}$/;',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'Literal',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );

test = {
	'code': 'var re = new RegExp( "a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?aaaaaaaaaaaaaaaaaaaaaaaaaa", "i" );',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'NewExpression',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );

test = {
	'code': 'var re = /(x+x+)+y/;',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'Literal',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );

test = {
	'code': 'var re = /foo|(x+x+)+y/;',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'Literal',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );

test = {
	'code': 'var re = /(a+){10}y/;',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'Literal',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );

test = {
	'code': 'var re = /(a+){2}y/;',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'Literal',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );

test = {
	'code': 'var re = RegExp( "(.*){1,32000}[bc]" );',
	'errors': [
		{
			'message': 'Unsafe regular expression',
			'type': 'CallExpression',
			'line': 1,
			'column': 10
		}
	]
};
invalid.push( test );


// EXPORTS //

module.exports = invalid;

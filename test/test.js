/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	RuleTester = require( 'eslint' ).RuleTester,
	valid = require( './fixtures/valid.js' ),
	invalid = require( './fixtures/invalid.js' ),
	plugin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'eslint-plugin-no-unsafe-regex', function tests() {

	it( 'should export an object', function test() {
		expect( plugin ).to.be.an( 'object' );
	});

	it( 'should include rules', function test() {
		assert.property( plugin, 'rules' );
	});

	it( 'should include default configuration', function test() {
		assert.property( plugin, 'rulesConfig' );
	});

	it( 'should include a `no-unsafe-regex` rule', function test() {
		assert.property( plugin.rules, 'no-unsafe-regex' );
		assert.isFunction( plugin.rules[ 'no-unsafe-regex' ] );
	});

	it( 'should include a `no-unsafe-regex` default configuration', function test() {
		assert.property( plugin.rulesConfig, 'no-unsafe-regex' );
		assert.strictEqual( plugin.rulesConfig[ 'no-unsafe-regex' ], 2 );
	});

	it( 'should properly validate regular expressions', function test() {
		var tester = new RuleTester();

		tester.run( 'no-unsafe-regex', plugin.rules[ 'no-unsafe-regex' ], {
			'valid': valid,
			'invalid': invalid
		});
	});

});

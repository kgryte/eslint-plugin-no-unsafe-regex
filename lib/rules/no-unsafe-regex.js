'use strict';

// MODULES //

var safe = require( 'safe-regex' );


// RULE //

/**
* FUNCTION: rule( context )
*	Validates each regular expression and reports any which are possibly unsafe.
*
* @param {Object} context - ESLint context
* @returns {Void}
*/
function rule( context ) {

	/**
	* FUNCTION: validateRegExp( node )
	*	Validates a regular expression.
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;

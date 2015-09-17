'use strict';

// MODULES //

var safe = require( 'safe-regex' );


// RULE //

/**
* FUNCTION: rule( context )
*	Rule for validating regular expressions and reporting any which are unsafe.
*
* @param {Object} context - ESLint context
* @returns {Object} validators
*/
function rule( context ) {
	/**
	* FUNCTION: validateLiteral( node )
	*	Validates a regular expression literal.
	*
	* @param {Node} node - AST node
	* @returns {Void}
	*/
	function validateLiteral( node ) {
		var token = context.getTokens( node )[ 0 ];
		if (
			token.type === 'RegularExpression' &&
			!safe( token.value )
		) {
			context.report( node, 'Unsafe regular expression' );
		}
	} // end FUNCTION validateLiteral()

	/**
	* FUNCTION: validateNewExpression( node )
	*	Validates a regular expression creating using the RegExp constructor with a `new` operator.
	*
	* @param {Node} node - AST node
	* @returns {Void}
	*/
	function validateNewExpression( node ) {

		if ( node.callee.name === 'RegExp' ) {
			console.dir( node );
		}
	} // end FUNCTION validateNewExpression()

	/**
	* FUNCTION: validateCallExpression( node )
	*	Validates a regular expression creating using the RegExp constructor without the `new` operator.
	*
	* @param {Node} node - AST node
	* @returns {Void}
	*/
	function validateCallExpression( node ) {
		var args,
			len,
			re,
			i;

		if ( node.callee.name === 'RegExp' ) {
			len = node.arguments.length;
			args = new Array( node.arguments.length );
			for ( i = 0; i < len; i++ ) {
				args[ i ] = node.arguments[ i ].value;
			}
			console.log( node.arguments );
			re = RegExp.apply( null, args );
			if ( !safe( re ) ) {
				context.report( node, 'Unsafe regular expression' );
			}
		}
	} // end FUNCTION validateCallExpression()

	return {
		'Literal': validateLiteral,
		'NewExpression': validateNewExpression,
		'CallExpression': validateCallExpression
	};
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;

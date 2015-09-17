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
	* FUNCTION: validateExpression( node )
	*	Validates a regular expression creating using the `RegExp` constructor.
	*
	* @param {Node} node - AST node
	* @returns {Void}
	*/
	function validateExpression( node ) {
		var args,
			len,
			re,
			i;

		if ( node.callee.name === 'RegExp' ) {
			len = node.arguments.length;
			args = new Array( node.arguments.length );
			for ( i = 0; i < len; i++ ) {
				// NOTE: we only support literals ATM. Otherwise, we may need to walk and implement an entire tree.
				if ( node.arguments[ i ].type !== 'Literal' ) {
					return;
				}
				args[ i ] = node.arguments[ i ].value;
			}
			re = RegExp.apply( null, args );
			if ( !safe( re ) ) {
				context.report( node, 'Unsafe regular expression' );
			}
		}
	} // end FUNCTION validateExpression()

	return {
		'Literal': validateLiteral,
		'NewExpression': validateExpression,
		'CallExpression': validateExpression
	};
} // end FUNCTION rule()


// EXPORTS //

module.exports = rule;

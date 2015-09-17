'use strict';

var safe = require( 'safe-regex' );

console.log( safe( new RegExp( "(.*){1,32000}[bc]" ) ) );

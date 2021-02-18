const hbs = require( 'hbs' );

//Helpers by hbs
hbs.registerHelper( 'getAnio', () => new Date().getFullYear() );
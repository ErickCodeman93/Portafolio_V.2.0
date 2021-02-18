// Dependencies
require( 'dotenv' ).config();
const express = require( 'express' );
const hbs = require( 'hbs' );

// Helpers
require( '../helpers/helpers' );

const port = process.env.PORT;
const app = express();
const dirWebPage = process.cwd();

// HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials( dirWebPage + '/views/share' );
hbs.registerPartials( dirWebPage + '/views/content' );

// Serve static content ( middleware )
app.use( express.static( 'public' ) );

// Routes
app.get( '/', (req, res) => {
	res.render( 'page', {
		template: 'Erick Alva',
		namePage: 'Home',
		title: 'Home | myPage',
		whichPartial: function() {
			return "home";
	  }
	});
});

app.get( '/about', (req, res) => {
	res.render( 'page', {
		template: 'Erick Alva',
		namePage: 'About',
		title: 'About | myPage',
		whichPartial: function() {
			return "about";
	  }
	});
});

app.get( '*', (req, res) => {
	// res.sendFile( dirWebPage + '/public/404.html' )
	res.render( '404', {
		name: '404',
		title: '404 | myPage',
	});
});
 
app.listen( port, () => {
	console.log(`Example app listening at http://localhost:${ port }`)
});
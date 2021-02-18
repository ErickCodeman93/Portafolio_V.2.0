// Dependencies
require( 'dotenv' ).config();
const express = require( 'express' );
const hbs = require( 'hbs' );
const { sendInformation } = require('../controllers/GetDataPersonalController');

// Helpers
require( '../helpers/helpers' );

const port = process.env.PORT;
const app = express();
const dirWebPage = process.cwd();
let idiomSave = '';

// HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials( dirWebPage + '/views/share' );
hbs.registerPartials( dirWebPage + '/views/content' );

// Serve static content ( middleware )
app.use( express.static( 'public' ) );

// Routes
app.get( /^\/(es|en)$/, (req, res) => {

	const [ ,idiomUrl ] = req.path.split('/');

	idiomSave = idiomUrl; 

	const { desc, experience } = sendInformation( idiomUrl );

	res.render( 'page', {
		template: 'Erick Alva',
		namePage: 'Hola',
		title: 'Home | myPage',
		content: desc,
		idiomUrl,
		whichPartial: function() {
			return "home";
	  }
	});
});

app.get( /^\/(es|en)\/about$/, (req, res) => {

	const [ ,idiomUrl ] = req.path.split('/');

	idiomSave = idiomUrl;

	const { desc, experience } = sendInformation( idiomUrl );

	res.render( 'page', {
		template: 'Erick Alva',
		namePage: 'About',
		title: 'About | myPage',
		idiomUrl,
		whichPartial: function() {
			return "about";
	  }
	});
});

app.get( '/', (req, res) => res.redirect( `/${ idiomSave }` ) );

app.get( '*', (req, res) => {
	res.render( '404', {
		name: '404',
		title: '404 | myPage',
	});
});
 
app.listen( port, () => {
	console.log(`Example app listening at http://localhost:${ port }`)
});
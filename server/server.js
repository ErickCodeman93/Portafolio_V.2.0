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

// En idioma por defecto es Espanol
let idiomSave = 'es';

// HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials( dirWebPage + '/views/share' );
hbs.registerPartials( dirWebPage + '/views/content' );

// Serve static content ( middleware )
app.use( express.static( 'public' ) );

// Routes

//La ruta es un regex con un or que verifica si es "es" o "en"
app.get( /^\/(es|en)$/, (req, res) => {

	const [ ,idiomUrl ] = req.path.split('/');

	//Se hace persistente la variable idiomSave de acuerdo al idioma del request de la pagina  
	idiomSave = idiomUrl; 

	//De acuerdo al idioma de la pagina donde se hizo la peticion es la informacion que devuelve
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
		namePage: idiomUrl === 'en' ? 'About' : 'Acerca de',
		title: 'About | myPage',
		idiomUrl,
		whichPartial: function() {
			return "about";
	  }
	});
});

app.get( '/', (req, res) => {

	/*
		Para no perder la navegacion del idioma siempre que quieran ir
		al inicio se va al del idioma que se encuentra actualmente o donde fue
		la ultima peticion.
	*/
	res.redirect( `/${ idiomSave }` );
});

app.get( '*', (req, res) => {
	res.render( '404', {
		name: '404',
		title: '404 | myPage',
	});
});
 
app.listen( port, () => {
	console.log(`Example app listening at http://localhost:${ port }`)
});
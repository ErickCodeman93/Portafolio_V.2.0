import { Request, Response } from "express";
import { sendInformation } from "../../helpers/helpers";

// En idioma por defecto es Espanol
let idiomSave = 'es';

export const homeController = ( req : Request, res: Response ) => {

	
	const [ ,idiomUrl ] = req.path.split('/');

	//Se hace persistente la variable idiomSave de acuerdo al idioma del request de la pagina  
	idiomSave = idiomUrl; 

	//De acuerdo al idioma de la pagina donde se hizo la peticion es la informacion que devuelve
	const info = sendInformation( idiomUrl );

	res.render( 'page', {
		template: 'Erick Alva',
		namePage: 'Hola',
		title: 'Erick Alva | Portfolio',
		data: info,
		idiomUrl,
		whichPartial: function() {
			return "home";
	  }
	} );

} //end function


export const aboutController = (req : Request, res: Response ) => {

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

} //end function

export const redirectController = (req : Request, res: Response ) => {

	/*
		Para no perder la navegacion del idioma siempre que quieran ir
		al inicio se va al del idioma que se encuentra actualmente o donde fue
		la ultima peticion.
	*/
	res.redirect( `/${ idiomSave }` );

} //end function

export const notFoundController = (req : Request, res: Response ) => { 

	res.render( '404', {
		name: '404',
		title: '404 | myPage',
	});

} //end function


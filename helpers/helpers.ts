import hbs from 'hbs';
import InfoGeneral from "../models/Data/InfoGeneral";

export const sendInformation = ( idiom = 'es' ) => {

	const data = new InfoGeneral();

	let personalInfo;

	if( idiom === 'es' )
		personalInfo = data.InfoEs;
	else
		personalInfo = data.InfoEn;

	return personalInfo; 
} //end function

//Helpers by hbs
hbs.registerHelper( 'getAnio', () => new Date().getFullYear() );
const InfoGeneral = require("../models/InfoGeneral")

const sendInformation = ( idiom = 'es' ) => {

	const data = new InfoGeneral();

	let personalInfo;

	if( idiom === 'es' )
		personalInfo = data.InfoEs;
	else
		personalInfo = data.InfoEn;

	return personalInfo; 
} //end function


module.exports = {
	sendInformation,
}
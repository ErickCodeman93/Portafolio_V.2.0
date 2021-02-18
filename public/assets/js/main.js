
//:: Config Url

//Desestructuro el arreglo en idioma y pagina de la url actual
let [ ,idiomPage, page ] = location.pathname.split('/');

//Cada que se carga la pagina guardo en local storage el idioma actual 
localStorage.setItem( 'idiom', idiomPage );

//Esta funcion se encarga de cambiar de idioma el sitio
const changeIdomPage = ( idiom ) => {

	const idiomCurrent = localStorage.getItem( 'idiom' );

	//Si no encuentra la pagina lo en envia al inicio del idioma elegido
	const changePageIdiom = page ? `/${ idiom }/${ page }` : `/${ idiom }`; 

/*** 
	En caso de que el idioma elegido sea diferente al que esta en local storage se va a la pagina 
	con el idioma elegido pero en su misma ruta.
*/
	if( idiom !== idiomCurrent )
		location.href = changePageIdiom;	

} //end function

//:: End Config Url

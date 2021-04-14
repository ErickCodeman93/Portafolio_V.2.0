
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

let hamburguer = document.querySelector(".nav-hero .nav-bar .nav-list .hamburguer");
let mobile_menu = document.querySelector(".nav-hero .nav-bar .nav-list ul");
// const header = document.querySelector( "nav .nav-hero .contain" );

hamburguer.addEventListener( 'click', () => {
	hamburguer.classList.toggle('active');
	mobile_menu.classList.toggle('active');
} );

document.addEventListener( 'scroll', () => {

	let scroll_position = window.scrollY;
	let nav = document.querySelector('#nav-hero');

	if( scroll_position > 250 )
		nav.style.backgroundColor = '#29323c';
	else
		nav.style.backgroundColor = 'transparent';

} );
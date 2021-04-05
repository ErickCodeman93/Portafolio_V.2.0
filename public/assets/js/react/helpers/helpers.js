//Request Post

const post = async ( endpoint, payload ) => {

	const config = {
		method : 'POST',
		headers: { 'Content-Type' : 'application/json' },
		body: JSON.stringify( payload )
	}

	const request = await fetch( endpoint, config );

	// console.log( request );
	const data = await request.json();

	const { ok, status, statusText } = request; 

	return { ok, status, statusText, data };

} //end function

const check = ( { status } ) => {

	const codes = [
		200,
		201
	]

	if( ! codes.includes( status ) )
		return false

	return true;

} //end function

const errorsMsg = ( { data } ) => {
	
	const { errors } = data;
	const  msg = ( errors ) ? errors[0].msg : '';
	return msg;
} //end function


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
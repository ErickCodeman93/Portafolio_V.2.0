export const validateTerminos = ( terminos:boolean = false ) => {

	if( !terminos )
		throw new Error( 'Debes aceptar los terminos y condiciones' );

		return true;
} //end function

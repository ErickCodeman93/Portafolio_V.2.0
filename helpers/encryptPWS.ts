import bcryptjs from 'bcryptjs';

const encryptPassword = ( password:any = null ) => {

	if ( ! password )
		throw new Error( 'Necesitas agregar un password' );

	//Encriptar
	const salt = bcryptjs.genSaltSync();
	return bcryptjs.hashSync( password, salt );

} // end function


export default encryptPassword;
import { Request, Response } from "express";
import Records from "../../models/DataBase/Records";
import encryptPassword from "../../helpers/encryptPWS";
import send from "../../helpers/sendMail";

export const getUsuarios = ( req:Request, res: Response ) => {

	return res.json({
		msg: 'GET',
	});
} //end function

export const postUsuario = async ( req:Request, res: Response ) => {


	const { name, phone, email, message ,idiom } = req.body;

	try {

		
		const data = new Records( { name, phone, email, message } ); 
		
		await data.save();
		
		await send( name, email, phone, message, idiom );

		return res.status( 201 ).json({
			msg: 'POST',
			data
		});

	} //end try 
	catch ( error ) {
		
		console.log( error );
		
		return res.status( 500 ).json({
			msg: 'error',
			data: error.toString()
		});
	} //end catch

} //end function

export const getUsuario = ( req:Request, res: Response ) => {

	const { id } = req.params;

	return res.json({
		msg: 'SHOW',
		id
	});
} //end function

export const putUsuario = ( req:Request, res: Response ) => {

	const { id } = req.params;
	const { body:data } = req

	return res.status( 201 ).json({
		msg: 'PUT',
		id,
		data
	});
} //end function

export const deleteUsuario = ( req:Request, res: Response ) => {

	const { id } = req.params;

	return res.json({
		msg: 'DELETE',
		id
	});
} //end function

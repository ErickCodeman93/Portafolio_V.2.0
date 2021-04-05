import { Router } from 'express';
import { check } from 'express-validator';
import validateFields from '../../middlewares/validateFields';
import { validateTerminos } from '../../helpers/validateContentFields';

import { 
	deleteUsuario, 
	getUsuario, 
	getUsuarios, 
	postUsuario, 
	putUsuario } from '../../controllers/API/UserController';

const routerApi = Router();

routerApi.get( '/', getUsuarios );

routerApi.post( '/', [ 
	check( 'user', 'El Usuario es Obligatorio' ).not().isEmpty(),
	check( 'name', 'El nombre es Obligatorio' ).not().isEmpty(),
	check( 'email', 'El email es Obligatorio' ).isEmail(),
	check( 'pwd', 'La contraseña es obligatoria y debe tener mínimo 6 caracteres' ).isLength( {min:6} ),
	check( 'terminos' ).isBoolean().custom( validateTerminos ),
	validateFields
], postUsuario );

routerApi.get( '/:id', getUsuario );
routerApi.put( '/:id', putUsuario );
routerApi.delete( '/:id', deleteUsuario );

export default routerApi;

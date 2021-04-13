import { Router } from 'express';
import { check } from 'express-validator';
import validateFields from '../../middlewares/validateFields';

import { 
	deleteUsuario, 
	getUsuario, 
	getUsuarios, 
	postUsuario, 
	putUsuario } from '../../controllers/API/UserController';

const routerApi = Router();

routerApi.get( '/', getUsuarios );

routerApi.post( '/', [ 
	check( 'name', 'El nombre es Obligatorio' ).not().isEmpty(),
	check( 'email', 'El email es Obligatorio' ).isEmail(),
	validateFields
], postUsuario );

routerApi.get( '/:id', getUsuario );
routerApi.put( '/:id', putUsuario );
routerApi.delete( '/:id', deleteUsuario );

export default routerApi;

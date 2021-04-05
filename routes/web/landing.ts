import { Router } from 'express';

//Controllers
import { 
	aboutController, 
	homeController, 
	redirectController, 
	notFoundController 
} from '../../controllers/WEB/LandingController';

const routerWeb = Router();

routerWeb.get( /^\/(es|en)$/, homeController );
routerWeb.get( /^\/(es|en)\/about$/, aboutController );
routerWeb.get( '/', redirectController );
routerWeb.get(  '*', notFoundController );

export default routerWeb;
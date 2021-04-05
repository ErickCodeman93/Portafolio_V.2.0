import { Application } from 'express';

//Controllers Web Routes
import users from './users';

class ConfigWebRoutes {

	static startRoute( app:Application ){

		const apiPaths = {
			users: '/api/users',
		};

		app.use( apiPaths.users, users );

	} //end constuctor

} //end class

export default ConfigWebRoutes;


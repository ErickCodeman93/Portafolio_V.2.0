import { Application } from 'express';

//Controllers Web Routes
import home from './landing';

class ConfigWebRoutes {

	static startRoute( app:Application ){

		const webPaths = {
			home: '/',
		};

		app.use( webPaths.home, home );

	} //end constuctor

} //end class

export default ConfigWebRoutes;


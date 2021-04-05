import express, { Application } from 'express';
import cors from 'cors';
import hbs from 'hbs';

//Config Mail
import transporter from '../../Mail/Config';

//Config routes web
import ConfigWebRoutes from '../../routes/web/ConfigWebRoutes';

//Config routes API
import ConfigApiRoutes from '../../routes/api/ConfigApiRoutes';
import dbConnection from '../../database/config';

class Server {

	private app: Application;
	private port: string;
	private dirWebPage: string;
	
	constructor(){

		this.app = express();
		this.port = process.env.PORT || '8000';
		this.dirWebPage = process.cwd();

		//Handlebars
		this.app.set( 'view engine', 'hbs' );
		hbs.registerPartials( this.dirWebPage + '/views/share' );
		hbs.registerPartials( this.dirWebPage + '/views/content' );

		//Database
		this.dbConnect();

		//Mail
		this.sendMail();

		//Ejecutar middlewares
		this.middlewares();

		//Ejecutar rutas API
		ConfigApiRoutes.startRoute( this.app );
		
		//Ejecutar rutas WEB
		ConfigWebRoutes.startRoute( this.app );

	} //end contructor

	async sendMail(){

		try {
			
			const response = await transporter.verify();
	
			if( response )
				console.log("Ready to send mail");
			else
				console.log( response );

		} //end try
		catch ( error ) {
			throw new Error( error )
		} //end catch
	

	} //end method

	async dbConnect() {

		await dbConnection();
	} //end method

	middlewares(){

		//Cors
		this.app.use( cors() );

		//Lectura del body
		this.app.use( express.json() );

		//Carpeta publica
		this.app.use( express.static( 'public' ) );
	} //end method

	listen(){

		this.app.listen( this.port, () => {
			console.log( `Server online in port ${ this.port }` );
		} );
	} //end method

} //end class 

export default Server;
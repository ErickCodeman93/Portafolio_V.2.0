import mongoose from 'mongoose'

const dbConnection = async () => {

	try {

		const connectionUrl = process.env.MONGO_CONNECTION || '';

		await mongoose.connect( connectionUrl,{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true,
		} );

		console.log( 'Database Online' );
	} //end try 
	catch ( error ) {
		throw new Error( 'Error connection to data base' );
	} //end catch

}

export default dbConnection;
const fs = require( 'fs' );
const _file = './data/data.json'

class InfoGeneral {
	
	data = {};

	constructor(){
		this.data = this.readDB(); 
	}

	get InfoEs(){

		const { es } = this.data;
		return es;
	} //end get

	get InfoEn(){

		const { en } = this.data;
		return en;
	} //end get

	readDB(){

		if( ! fs.existsSync( _file ) )
			throw Error( 'The file no exist ...' );

		const data = fs.readFileSync( _file, { encoding : 'utf-8' } );
		return JSON.parse( data );

	} //end method

	writeDB(){
		
		fs.writeFileSync( _file, JSON.stringify( this.data ) );

	} // end method

} //end class

module.exports = InfoGeneral;
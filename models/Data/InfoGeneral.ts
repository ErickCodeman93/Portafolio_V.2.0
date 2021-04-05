import fs from 'fs';

class InfoGeneral {
	
	private data: any;
	private _file = './data/data.json';

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

		if( ! fs.existsSync( this._file ) )
			throw Error( 'The file no exist ...' );

		const data = fs.readFileSync( this._file, { encoding : 'utf-8' } );
		return JSON.parse( data );

	} //end method

	writeDB(){
		
		fs.writeFileSync( this._file, JSON.stringify( this.data ) );

	} // end method

} //end class

export default InfoGeneral;
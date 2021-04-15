const { useState } = React;

const useForm = ( initialState = {} ) => {

	const [ values, setValues ] = useState( initialState );
	const [ formularioValido, setFormularioValido ] = useState( null );
	const [ time, setTime ] 	= useState( false );
	const [ icon, setIcon ] 	= useState( false );
	const [ idiom ] = useIdiom();

	const { message_screen } = idiom;

	const { name, email, phone, message } = values;

	const handleInputChanges = ( { target } ) => {
		
		setValues( {
			...values,
			[ target.name ] : { 
				campo: target.value,
				valido: null
			}
		} );

	} //end function

	const clearValues = () => {
		setValues( initialState );
	}

	const onSubmit = ( e ) => {
		e.preventDefault();

		const [ ,idiom ] = location.pathname.split( '/' );

		if( name.valido === 'true' && email.valido  === 'true' && phone.valido  === 'true' && message.valido  === 'true'  ){
			setFormularioValido( true );
			clearValues();
		} //end if
		else{
			setFormularioValido( false );
			return;
		} //end else

		const data = {
			name:name.campo,
			phone:phone.campo,
			email:email.campo,
			message:message.campo,
			idiom,
		}

		const endpoint = '/api/users';

		Swal.fire( {
			"allowOutsideClick": false,
			"title": message_screen.loading,
		} );

		Swal.showLoading();

		post( endpoint, data ).then( ( response ) => {
			
			Swal.close();

			if( check( response ) ){

				Swal.fire( {
					"confirmButtonText": "Aceptar",
					"title": message_screen.success,
					"icon": 'success',
				} );

				setTime( true );

				setTimeout( () => {
					setTime( false );
				}, 10000 );

			} //end if
			else
				Swal.fire({
					"confirmButtonText": "Aceptar",
					"title": "Error",
					"icon": "error",
					"text": errorsMsg( response )
				});

		} ).catch( error => {

			console.log( error );
			Swal.close();

			Swal.fire({
				"confirmButtonText": "Aceptar",
				"title": "Error",
				"icon": "error",
				'text': "Server Error"
			});
		} )

	} //end function

	const validation = ( { target }, regex ) => {
		
		let value = false;

		if( regex ){

			if( regex.test( target.value ) ){

				setValues( {
					...values,
					[ target.name ] : { 
						campo: target.value,
						valido: 'true'
					}
				} );
				value = true;
			} //end if
			else{ 
				setValues( {
					...values,
					[ target.name ] : { 
						campo: target.value,
						valido: 'false'
					}
				} );
			} //end else
		} //end if

		return value;
	} //end function

	const nameIcon = ( name ) => {

		let icon = '';

		switch ( name ) {
			case 'name':
				icon = 'fas fa-user';
			break;
			case 'email':
				icon = 'fas fa-envelope';
			break;
			case 'phone':
				icon = 'fas fa-phone';
			break;
		}

		return icon;
	} //end function

	const changeIcon = ( e, regex ) => setIcon( validation( e, regex ) );

	return {
		values,
		handleInputChanges,
		time,
		formularioValido,
		onSubmit,
		nameIcon,
		changeIcon,
		icon,
	};

}

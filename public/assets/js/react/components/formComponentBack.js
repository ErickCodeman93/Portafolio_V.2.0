const { useState } = React;

const App = () => {

	const {
		nombre, 
		cambiarNombre,
		correo, 
		cambiarCorreo,
		telefono, 
		cambiarTelefono,
		mensaje, 
		cambiarMensaje,
		formularioValido, 
		cambiarFormularioValido,
		time, 
		setTime,
	} = useForm();

	const onSubmit = ( e ) => {
		e.preventDefault();

		const [ ,idiom ] = location.pathname.split( '/' );

		if( 
			nombre.valido === 'true' && 
			correo.valido  === 'true'
		 ){

			cambiarFormularioValido( true );
			cambiarNombre( { campo: '',valido: null } );
			cambiarCorreo( { campo: '',valido: null } );
			cambiarTelefono( { campo: '',valido: null } );
			cambiarMensaje( { campo: '',valido: null } );

		} //end if
		else{
			cambiarFormularioValido( false );
			return;
		} //end else

		const { campo:name } = nombre;
		const { campo:phone } = telefono;
		const { campo:email } = correo;
		const { campo:message } = mensaje;

		const data = {
			name,
			phone,
			email,
			message,
			idiom
		}

		const endpoint = '/api/users';

		Swal.fire( {
			"allowOutsideClick": false,
			"title": "Espere un momento por favor.",
		} );
		Swal.showLoading();

		post( endpoint, data ).then( ( response ) => {
			
			Swal.close();

			if( check( response ) ){

				Swal.fire( {
					"confirmButtonText": "Aceptar",
					"title": "Éxito",
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

			console.log( console.log( error ) );
			Swal.close();
			Swal.fire({
				"confirmButtonText": "Aceptar",
				"title": "Error",
				"icon": "error",
				'text': "Error del servidor"
			});
		} )

	} //end function

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				
				<InputComponent
					myState={ nombre }
					myChangeState={ cambiarNombre }
					type="text"
					label="Nombre: *"
					placeholder="Nombre"
					name="nombre"
					msgError="El nombre debe tener solo letras."
					regex={ expresiones.nombre }
				/>

				<InputComponent
					myState={ correo }
					myChangeState={ cambiarCorreo }
					type="text"
					label="Email: *"
					placeholder="Email"
					name="email"
					msgError="No es un formato válido de correo."
					regex={ expresiones.correo }
				/>

				<InputComponent
					myState={ telefono }
					myChangeState={ cambiarTelefono }
					type="text"
					label="Teléfono:"
					placeholder="Teléfono"
					name="telefono"
					msgError="No es un formato válido de teléfono."
					regex={ expresiones.telefono }
				/>

				<TextAreaComponent
					myState={ mensaje }
					myChangeState={ cambiarMensaje }
					type="text"
					label="Mensaje: "
					placeholder="Escribe aquí"
					name="mensaje"
					msgError="No es un formato válido."
					regex={ expresiones.nombre }
				/>

				{ formularioValido === false && <MensajeError>
					<p>
					<i class="fas fa-exclamation-circle"></i> <b>Error:</b> Todos los campos son obligatorios.
					</p>
				</MensajeError> }

				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{ ( formularioValido && time ) && <MensajeExito id="success-message">Enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>

			</Formulario>
		</main>
	)
}
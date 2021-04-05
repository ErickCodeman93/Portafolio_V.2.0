const { useState } = React;

const App = () => {

	const [ usuario, cambiarUsuario ] = useState( {
		campo: '',
		valido: null
	} );

	const [ nombre, cambiarNombre ] = useState( {
		campo: '',
		valido: null
	} );

	const [ password, cambiarPassword ] = useState( {
		campo: '',
		valido: null
	} );

	const [ password2, cambiarPassword2 ] = useState( {
		campo: '',
		valido: null
	} );

	const [ correo, cambiarCorreo ] = useState( {
		campo: '',
		valido: null
	} );

	const [ telefono, cambiarTelefono ] = useState( {
		campo: '',
		valido: null
	} );

	const [ terminos, cambiarTerminos ] = useState( true );

	const [formularioValido, cambiarFormularioValido ] = useState( null );

	const validarPassword2 = () => {

		let value = false;

		if( password.campo.length > 0 ){

			if( password.campo !== password2.campo )
				cambiarPassword2( ( prevState ) => {
					return { ... prevState, valido:'false' }
				} );
			else {
				cambiarPassword2( ( prevState ) => {
					return { ... prevState, valido:'true' }
				} );

				value = true;
			} //end else
		} //end if

		return value;

	} //end function

	const onChangeTerminos = ( e ) => {

		cambiarTerminos( e.target.checked )
	} //end function

	const onSubmit = ( e ) => {
		e.preventDefault();

		const [ ,idiom ] = location.pathname.split( '/' );

		if( usuario.valido 		=== 'true' &&
			nombre.valido 		=== 'true' && 
			password.valido 	=== 'true' && 
			password2.valido 	=== 'true' &&
			correo.valido 		=== 'true' && 
			telefono.valido 	=== 'true' && 
			terminos ){

			cambiarFormularioValido( true );
			cambiarUsuario( { campo: '',valido: null } );
			cambiarNombre( { campo: '',valido: null } );
			cambiarCorreo( { campo: '',valido: null } );
			cambiarTelefono( { campo: '',valido: null } );
			cambiarPassword( { campo: '',valido: null } );
			cambiarPassword2( { campo: '',valido: null } ); 

		} //end if
		else{
			cambiarFormularioValido( false );
			return;
		} //end else

		const { campo:user } = usuario;
		const { campo:name } = nombre;
		const { campo:phone } = telefono;
		const { campo:email } = correo;
		const { campo:pwd } = password;
		const { campo:pwd2 } = password2;

		const data = {
			user,
			name,
			phone,
			email,
			pwd,
			pwd2,
			terminos,
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

			if( check( response ) )
				Swal.fire( {
					"confirmButtonText": "Aceptar",
					"title": "Éxito",
					"icon": 'success',
				} );
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
					myState={ usuario }
					myChangeState={ cambiarUsuario }
					type="text"
					label="Usuario: *"
					placeholder="Usuario"
					name="usuario"
					msgError="El usuario debe tener de 4 a 6 dígitos y solo puede contener números, letras y guiones."
					regex={ expresiones.usuario }
				/>

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
					label="Teléfono: *"
					placeholder="Teléfono"
					name="telefono"
					msgError="No es un formato válido de teléfono."
					regex={ expresiones.telefono }
				/>

				<InputComponent
					myState={ password }
					myChangeState={ cambiarPassword }
					type="password"
					label="Password: *"
					placeholder="Password"
					name="password"
					msgError="El contraseña debe tener un mínimo de 4 dígitos, números, letras y guiones"
					regex={ expresiones.password }
					// myFuncion={ validarPassword2 }
				/>

				<InputComponent
					myState={ password2 }
					myChangeState={ cambiarPassword2 }
					type="password"
					label="Confirmar Password: *"
					placeholder="Confirmar Password"
					name="password2	"
					msgError="El contraseña no es igual."
					myFuncion={ validarPassword2 }
				/>

				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox" 
							name="terminos" 
							id="terminos" 
							checked={ terminos }
							onChange={ onChangeTerminos } />
						Acepto los Terminos y condiciones
					</Label>
				</ContenedorTerminos>

				{ formularioValido === false && <MensajeError>
					<p>
					<i class="fas fa-exclamation-circle"></i> <b>Error:</b> Todos los campos son obligatorios.
					</p>
				</MensajeError> }

				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{ formularioValido === true && <MensajeExito>Enviado exitosamente!</MensajeExito> }
				</ContenedorBotonCentrado>

			</Formulario>
		</main>
	)
}
const App = () => {

	const { 
			values:formValues, 
			handleInputChanges, 
			time,
			formularioValido,
			onSubmit,
			nameIcon,
			changeIcon,
			icon, 
		} = useForm( {
		name: { 
			campo: '',
			valido: null
		},
		email: { 
			campo: '',
			valido: null
		},
		phone: { 
			campo: '',
			valido: null
		},
		message: { 
			campo: '',
			valido: null
		},
	} );

	const { name, email, phone, message } = formValues;

	return (
		<main>
			<Formulario action="" onSubmit={ onSubmit }>
				
				<InputComponent
					myState={ name }
					myHandleFunction={ handleInputChanges }
					type="text"
					label="Nombre: *"
					placeholder="Nombre"
					name="name"
					msgError="El nombre debe tener solo letras."
					regex={ expresiones.nombre }
					icon={icon}
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				<InputComponent
					myState={ email }
					myHandleFunction={ handleInputChanges }
					type="text"
					label="Email: *"
					placeholder="Email"
					name="email"
					msgError="No es un formato válido de correo."
					regex={ expresiones.correo }
					icon={icon}
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				<InputComponent
					myState={ phone }
					myHandleFunction={ handleInputChanges }
					type="text"
					label="Teléfono:"
					placeholder="Teléfono"
					name="phone"
					msgError="No es un formato válido de teléfono."
					regex={ expresiones.telefono }
					icon={ icon }
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				<TextAreaComponent
					myState={ message }
					myHandleFunction={ handleInputChanges }
					type="text"
					label="Mensaje: "
					placeholder="Escribe aquí"
					name="message"
					msgError="El mensaje debe tener solo letras."
					regex={ expresiones.mensaje }
					icon={ icon }
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				{ formularioValido === false && 
					<MensajeError>
						<p>
							<i class="fas fa-exclamation-circle"></i> <b>Error:</b> Todos los campos son obligatorios.
						</p>
					</MensajeError> 
				}

				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{ ( formularioValido && time ) && 
						<MensajeExito id="success-message">Enviado exitosamente!</MensajeExito> 
					}
				</ContenedorBotonCentrado>

			</Formulario>
		</main>
	)
}
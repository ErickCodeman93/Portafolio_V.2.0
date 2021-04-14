const App = () => {

	const [ idiom ] = useIdiom();

	const { 
		name:name_input, 
		email:email_input, 
		phone:phone_input, 
		message:message_input, 
		message_screen, 
		button_send 
	} = idiom;

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
					label={ name_input.label }
					placeholder={ name_input.placeholder }
					name="name"
					msgError={ name_input.msg }
					regex={ expresiones.nombre }
					icon={icon}
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				<InputComponent
					myState={ email }
					myHandleFunction={ handleInputChanges }
					type="text"
					label={ email_input.label }
					placeholder={ email_input.placeholder }
					name="email"
					msgError={ email_input.msg }
					regex={ expresiones.correo }
					icon={icon}
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				<InputComponent
					myState={ phone }
					myHandleFunction={ handleInputChanges }
					type="text"
					label={ phone_input.label }
					placeholder={ phone_input.placeholder }
					name="phone"
					msgError={ phone_input.msg }
					regex={ expresiones.telefono }
					icon={ icon }
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				<TextAreaComponent
					myState={ message }
					myHandleFunction={ handleInputChanges }
					type="text"
					label={ message_input.label }
					placeholder={ message_input.placeholder }
					name="message"
					msgError={ message_input.msg }
					regex={ expresiones.mensaje }
					icon={ icon }
					changeIcon={ changeIcon }
					nameIcon={ nameIcon }
				/>

				{ formularioValido === false && 
					<MensajeError>
						<p>
							<i class="fas fa-exclamation-circle"></i> <b>{ message_screen.error_title }</b> { message_screen.error_content }
						</p>
					</MensajeError> 
				}

				<ContenedorBotonCentrado>
					<Boton type="submit">{ button_send }</Boton>
					{ ( formularioValido && time ) && 
						<MensajeExito id="success-message">{ message_screen.success_form }</MensajeExito> 
					}
				</ContenedorBotonCentrado>

			</Formulario>
		</main>
	)
}
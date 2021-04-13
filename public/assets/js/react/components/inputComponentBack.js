const { useState } = React;

const InputComponent = ( { 
	myState,
	myChangeState,
	type,
	label,
	placeholder,
	name,
	msgError,
	regex,
	myFuncion } ) => {

	const [ icon, setIcon ] = useState( false );

	const onChange = ( e ) => {
		myChangeState( { ...myState, campo: e.target.value } );
	} //end function

	const validation = () => {

		if( regex ){

			if( regex.test( myState.campo ) ){
				myChangeState( { ...myState, valido: 'true' } );
				setIcon( true );
			} //end if
			else {
				myChangeState( { ...myState, valido: 'false' } )
				setIcon( false );
			} //end else
		} //end if

		if( myFuncion )
			setIcon( myFuncion() );	
		
	} //end function

	const nameIcon = ( name ) => {

		let icon = '';

		switch ( name ) {
			case 'nombre':
				icon = 'fas fa-user';
			break;
			case 'email':
				icon = 'fas fa-envelope';
			break;
			case 'telefono':
				icon = 'fas fa-phone';
			break;
		}

		return icon;
	} //End function


	return (
		<div>
			<Label 
				htmlFor={ name }
				valido={ myState ? myState.valido : '' }>
				{ label }
			</Label>
			<GroupInput>
				<IconInput>
					<i class={ nameIcon( name ) }></i>
				</IconInput>
				<Input 
					id={ name } 
					name={ name } 
					type={ type } 
					placeholder={ placeholder }
					value={ myState ? myState.campo : '' }
					onChange={ onChange }
					onKeyUp={ validation }
					onBlur={ validation }
					valido={ myState ? myState.valido : '' }
				/>
				<IconoValidation
						valido={ myState ? myState.valido : '' }>
						<i class={ icon ? "fas fa-check-circle" : "fas fa-times-circle" }></i>
				</IconoValidation>
			</GroupInput>
			<LeyendaError 
				valido={ myState ? myState.valido : '' }>
				{ msgError }
			</LeyendaError>
		</div>
	)
}

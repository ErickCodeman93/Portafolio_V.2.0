const { useState } = React;

const InputComponent = ( { 
	myState,
	myHandleFunction,
	type,
	label,
	placeholder,
	name,
	msgError,
	regex, 
	icon,
	changeIcon,
	nameIcon,
} ) => {

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
					onChange={ myHandleFunction }
					value={ myState ? myState.campo : '' }
					onKeyUp={ (e) => changeIcon( e, regex ) }
					onBlur={ (e) => changeIcon( e, regex ) }
					valido={ myState ? myState.valido : '' }
				/>
				<IconoValidation valido={ myState ? myState.valido : '' }>
						<i class={ icon ? "fas fa-check-circle" : "fas fa-times-circle" }></i>
				</IconoValidation>
			</GroupInput>
			<LeyendaError valido={ myState ? myState.valido : '' }>
				{ msgError }
			</LeyendaError>
		</div>
	)
}

const { useState } = React;

const TextAreaComponent = ( { 
	myState,
	myHandleFunction,
	type,
	label,
	placeholder,
	name,
	msgError,
	regex, 
	changeIcon,
} ) => {

	return (
		<div>
			<Label 
				htmlFor={ name }
				valido={ myState ? myState.valido : '' }>
				{ label }
			</Label>
			<GroupInput>
				<TextArea 
					id={ name } 
					name={ name } 
					type={ type } 
					placeholder={ placeholder }
					value={ myState ? myState.campo : '' }
					onChange={ myHandleFunction }
					onKeyUp={ (e) => changeIcon( e, regex ) }
					onBlur={ (e) => changeIcon( e, regex ) }
					valido={ myState ? myState.valido : '' }
					maxLength={ 500 }
				/>
			</GroupInput>
			<p className="text-center mt-2 text-white">{ myState ? maxLengthTextArea( myState.campo ) : '0'  } de 500 caracteres.</p>
			<LeyendaError valido={ myState ? myState.valido : '' }>
				{ msgError }
			</LeyendaError>
		</div>
	)
}

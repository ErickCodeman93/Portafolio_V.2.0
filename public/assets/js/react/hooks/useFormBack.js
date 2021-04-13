
const useForm = () => {
	
	const [ nombre, cambiarNombre ] = useState( {
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

	const [ mensaje, cambiarMensaje ] = useState( {
		campo: '',
		valido: null
	} );

	const [formularioValido, cambiarFormularioValido ] = useState( null );

	const [time, setTime] = useState( false );

	return {
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
	};

}

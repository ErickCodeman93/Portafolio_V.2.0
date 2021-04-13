const colores = {
	borde:"#0075FF",
	error:"#bb2929",
	exito:"#1ed12d",
};

const Formulario =  window.styled.form`
	// display: grid;
	// grid-template-columns: 1fr;
	// gap: 20px;

	// @media ( max-width: 800px  ){
	// 	grid-template-columns: 1fr;
	// }
	// padding:3rem;
`;

const Label = window.styled.label`
	display: block;
	// font-weight: 700;
	// padding: 10px;
	min-height: 40px;
	cursor: pointer;
	color:white;
	margin-top:20px;
	// ${ props => props.valido === 'false' && window.styled.css`
	// 	color: ${ colores.error };
	// ` }
`;

const GroupInput = window.styled.div`
 	position: relative;
	 z-index: 90;
	 width:100%;
	 display:flex;
	 align-items: center;
	 justify-content: flex-start;
	 overflow:hidden;
	 border-radius: 3px;
	// height: auto;
`;

const IconInput = window.styled.span`
	font-size: 1rem;
	height: 45px;
	width: 50px;
	display:flex;
	justify-content: center;
	align-items: center;
	background-color: #dadada;

`;

const Input = window.styled.input`
	width: 100%;
	background: #fff;
	// border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${ colores.borde };
		outline: none;
		box-shadow: 3px 0px 30px rgba( 163, 163, 163, 0.4 ); 
	}

	${ props => props.valido === 'true' && window.styled.css`
		border: 3px solid transparent;
	` }

	${ props => props.valido === 'false' && window.styled.css`
		border: 3px solid ${ colores.error } !important;
	` }
`;

const TextArea = window.styled.textarea`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 180px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	resize: vertical;
	outline: none;
	&:focus {
		border: 3px solid ${ colores.borde };
		outline: none;
		box-shadow: 3px 0px 30px rgba( 163, 163, 163, 0.4 ); 
	}

	${ props => props.valido === 'true' && window.styled.css`
		border: 3px solid transparent;
	` }

	${ props => props.valido === 'false' && window.styled.css`
		border: 3px solid ${ colores.error } !important;
	` }
`;

const LeyendaError = window.styled.p`
	font-size: 12px;
	margin-bottom: 0;
	margin-top: 5px;
	// color: ${ colores.error };
	color: #fff;
	display: none;

	${ props => props.valido === 'true' && window.styled.css`
		display: none;
	` }

	${ props => props.valido === 'false' && window.styled.css`
		display: block;
	` }
`;

const IconoValidation = window.styled.span`
	position: absolute;
	right: 10px;
	bottom: 9px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${ props => props.valido === 'true' && window.styled.css`
		opacity: 1;
		color: ${ colores.exito };
	` }

	${ props => props.valido === 'false' && window.styled.css`
		opacity: 1;
		color: ${ colores.error };
	` }
`;

const ContenedorTerminos = window.styled.div`
	grid-column: span 2;

	input{
		margin-right: 10px;
	}

	@media ( max-width: 800px  ){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = window.styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media ( max-width: 800px  ){
		grid-column: span 1;
	}
`;

const Boton = window.styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	// background: #000;
	// color: #fff;
	color: #000;
	// font-weight: bold;
	font-family: 'Roboto Mono';
	letter-spacing: 0.3rem;
	text-transform: uppercase;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	// margin-bottom: 10px;
	margin-top:40px;
	
	&:hover {
		// box-shadow: 3px 0px 30px rgba( 163, 163, 163, 1 );
		box-shadow: 0 0 20px #00000028;
	}
`;

const MensajeExito = window.styled.p`
	margin-top:20px;
	font-size: 14px;
	color: ${ colores.exito };
`;


const MensajeError = window.styled.div`
	height: auto;
	margin-top:20px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p{
		margin: 0;
	}
	b{
		margin-left: 10px;
	}
	@media ( max-width: 800px  ){
		grid-column: span 1;
	}
`;
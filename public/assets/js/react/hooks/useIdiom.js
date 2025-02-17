const useIdiom = () => {

	const [ ,idiom ] = location.pathname.split( '/' );

	const text = {
		"es" : {
			"name" : {
				"label":"Nombre *",
				"placeholder":"Escribe tu nombre",
				"msg" : "El nombre debe tener solo letras."
			},
			"email" : {
				"label":"Email *",
				"placeholder":"Escribe tu email",
				"msg" : "No es un formato válido de email."
			},
			"phone" : {
				"label":"Teléfono *",
				"placeholder":"Escribe tu teléfono",
				"msg" : "No es un formato válido de teléfono."
			},
			"message" : {
				"label":"Mensaje *",
				"placeholder":"Escribe tu mensaje aquí",
				"msg" : "El mensaje debe tener al menos 15 caracteres."
			},
			"message_screen" : {
				"error_title" : "Error:",
				"error_content" : "Todos los campos con * son obligatorios.",
				"succes_form" : "Enviado exitosamente !!!",
				"loading" : "Espere un momento por favor.",
				"success" : "Éxito"

			},
			"button_send": "Enviar"
		},
		"en" : {
			"name" : {
				"label":"Name *",
				"placeholder":"Your name here",
				"msg" : "The name must have only letters."
			},
			"email" : {
				"label":"Email *",
				"placeholder":"Your email here",
				"msg" : "It is not a valid email format."
			},
			"phone" : {
				"label":"Phone Number *",
				"placeholder":"Your phone number here",
				"msg" : "It is not a valid tel format."
			},
			"message" : {
				"label":"Message *",
				"placeholder":"Write your message here",
				"msg" : "The message must be at least 15 characters long."
			},
			"message_screen" : {
				"error_title" : "Error:",
				"error_content" : "All fields with * are required.",
				"succes_form" : "success !!!",
				"loading" : "Wait a moment please.",
				"success" : "Success"
			},
			"button_send": "Send"
		}
	};

	return [ text[ idiom ] ];
}

# Estructura para contenido estático en Node.js

👋 Hola a todos !!!, aqui encontraras una estructura para un web server que se sirve desde Node y usa un sistema de plantillas ( handlebars muy parecido al que trabaja laravel ) para generar contenido estático desde el servidor listo para desplegar y poner manos a la obra.

📫 Las librerías con las que cuenta esta estructura son:

- Bootstrap ( en su ultima versión )
- handlebars
- Node.js ( express )
- dotenv ( .env )

👀 Para trabajar sin problemas con esta estructura solo debes realizar unos simples pasos.

- Clonar o descargar el repo.

- Instalar las dependencias que son necesarias para la estructura con npm.  
```
npm install
```
- El siguiente comando inicia el servidor local y muestra el cascaron para empezar a trabajar.

```
npm start
```
- En caso de que no llegara funcionar el comando anterior, inicia el servidor manualmente con el siguiente comando de node.   

```
node server/server
```
- Si tienen instalado nodemon podrias iniciar con el siguiente comando.
```
nodemon server/server.js -e hbs,html,js
```

Si quieres cambiar el puerto que tiene por defecto esta estructura, puedes ir al archivo **.env** que se encuentra en la raíz de esta repo y cambiarlo por el que tu decidas como en el siguiente ejemplo:
```
PORT=3001
```

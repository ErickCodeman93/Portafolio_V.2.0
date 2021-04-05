import dotenv from 'dotenv';
import Server from '../models/Server/Server';

//Configurar dotenv 
dotenv.config();

//Intance server 
const server = new Server();

//Server online
server.listen();


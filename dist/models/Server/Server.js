"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const hbs_1 = __importDefault(require("hbs"));
//Config Mail
const Config_1 = __importDefault(require("../../Mail/Config"));
//Config routes web
const ConfigWebRoutes_1 = __importDefault(require("../../routes/web/ConfigWebRoutes"));
//Config routes API
const ConfigApiRoutes_1 = __importDefault(require("../../routes/api/ConfigApiRoutes"));
const config_1 = __importDefault(require("../../database/config"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '8081';
        this.dirWebPage = process.cwd();
        //Handlebars
        this.app.set('view engine', 'hbs');
        hbs_1.default.registerPartials(this.dirWebPage + '/views/share');
        hbs_1.default.registerPartials(this.dirWebPage + '/views/content');
        //Database
        this.dbConnect();
        //Mail
        this.sendMail();
        //Ejecutar middlewares
        this.middlewares();
        //Ejecutar rutas API
        ConfigApiRoutes_1.default.startRoute(this.app);
        //Ejecutar rutas WEB
        ConfigWebRoutes_1.default.startRoute(this.app);
    } //end contructor
    sendMail() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Config_1.default.verify();
                if (response)
                    console.log("Ready to send mail");
                else
                    console.log(response);
            } //end try
            catch (error) {
                throw new Error(error);
            } //end catch
        });
    } //end method
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield config_1.default();
        });
    } //end method
    middlewares() {
        //Cors
        this.app.use(cors_1.default());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    } //end method
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server online in port ${this.port}`);
        });
    } //end method
} //end class 
exports.default = Server;
//# sourceMappingURL=Server.js.map
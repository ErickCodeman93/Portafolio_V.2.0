"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Controllers Web Routes
const landing_1 = __importDefault(require("./landing"));
class ConfigWebRoutes {
    static startRoute(app) {
        const webPaths = {
            home: '/',
        };
        app.use(webPaths.home, landing_1.default);
    } //end constuctor
} //end class
exports.default = ConfigWebRoutes;
//# sourceMappingURL=ConfigWebRoutes.js.map
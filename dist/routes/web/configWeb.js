"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Controllers Web Routes
const landing_1 = __importDefault(require("../../routes/web/landing"));
class ConfigWebRoutes {
    constructor() {
        this.app = express_1.default();
        //Name routes
        this.webPaths = {
            home: '/',
        };
    } //end constuctor
    routes() {
        // merge name routes, controller routes
        this.app.use(this.webPaths.home, landing_1.default);
    } //end method
} //end class
exports.default = ConfigWebRoutes;
//# sourceMappingURL=configWeb.js.map
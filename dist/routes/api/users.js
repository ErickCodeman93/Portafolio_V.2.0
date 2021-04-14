"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../../middlewares/validateFields"));
const UserController_1 = require("../../controllers/API/UserController");
const routerApi = express_1.Router();
routerApi.get('/', UserController_1.getUsuarios);
routerApi.post('/', [
    express_validator_1.check('name', 'El nombre es Obligatorio').not().isEmpty(),
    express_validator_1.check('email', 'El email es Obligatorio').isEmail(),
    validateFields_1.default
], UserController_1.postUsuario);
routerApi.get('/:id', UserController_1.getUsuario);
routerApi.put('/:id', UserController_1.putUsuario);
routerApi.delete('/:id', UserController_1.deleteUsuario);
exports.default = routerApi;
//# sourceMappingURL=users.js.map
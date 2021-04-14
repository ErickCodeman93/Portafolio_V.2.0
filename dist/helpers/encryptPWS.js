"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const encryptPassword = (password = null) => {
    if (!password)
        throw new Error('Necesitas agregar un password');
    //Encriptar
    const salt = bcryptjs_1.default.genSaltSync();
    return bcryptjs_1.default.hashSync(password, salt);
}; // end function
exports.default = encryptPassword;
//# sourceMappingURL=encryptPWS.js.map
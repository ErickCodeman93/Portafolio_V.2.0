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
exports.deleteUsuario = exports.putUsuario = exports.getUsuario = exports.postUsuario = exports.getUsuarios = void 0;
const Records_1 = __importDefault(require("../../models/DataBase/Records"));
const sendMail_1 = __importDefault(require("../../helpers/sendMail"));
const getUsuarios = (req, res) => {
    return res.json({
        msg: 'GET',
    });
}; //end function
exports.getUsuarios = getUsuarios;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone, email, message, idiom } = req.body;
    try {
        const data = new Records_1.default({ name, phone, email, message });
        yield data.save();
        yield sendMail_1.default(name, email, phone, message, idiom);
        return res.status(201).json({
            msg: 'POST',
            data
        });
    } //end try 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'error',
            data: error.toString()
        });
    } //end catch
}); //end function
exports.postUsuario = postUsuario;
const getUsuario = (req, res) => {
    const { id } = req.params;
    return res.json({
        msg: 'SHOW',
        id
    });
}; //end function
exports.getUsuario = getUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body: data } = req;
    return res.status(201).json({
        msg: 'PUT',
        id,
        data
    });
}; //end function
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    return res.json({
        msg: 'DELETE',
        id
    });
}; //end function
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=UserController.js.map
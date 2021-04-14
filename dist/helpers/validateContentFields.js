"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTerminos = void 0;
const validateTerminos = (terminos = false) => {
    if (!terminos)
        throw new Error('Debes aceptar los terminos y condiciones');
    return true;
}; //end function
exports.validateTerminos = validateTerminos;
//# sourceMappingURL=validateContentFields.js.map
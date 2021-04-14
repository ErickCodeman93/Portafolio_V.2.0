"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty())
        return res
            .status(400)
            .json(errors);
    next();
}; //end function
exports.default = validateFields;
//# sourceMappingURL=validateFields.js.map
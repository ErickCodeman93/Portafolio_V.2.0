"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInformation = void 0;
const hbs_1 = __importDefault(require("hbs"));
const InfoGeneral_1 = __importDefault(require("../models/Data/InfoGeneral"));
const sendInformation = (idiom = 'es') => {
    const data = new InfoGeneral_1.default();
    let personalInfo;
    if (idiom === 'es')
        personalInfo = data.InfoEs;
    else
        personalInfo = data.InfoEn;
    return personalInfo;
}; //end function
exports.sendInformation = sendInformation;
//Helpers by hbs
hbs_1.default.registerHelper('getAnio', () => new Date().getFullYear());
//# sourceMappingURL=helpers.js.map
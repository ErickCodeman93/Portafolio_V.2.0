"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class InfoGeneral {
    constructor() {
        this._file = './data/data.json';
        this.data = this.readDB();
    }
    get InfoEs() {
        const { es } = this.data;
        return es;
    } //end get
    get InfoEn() {
        const { en } = this.data;
        return en;
    } //end get
    readDB() {
        if (!fs_1.default.existsSync(this._file))
            throw Error('The file no exist ...');
        const data = fs_1.default.readFileSync(this._file, { encoding: 'utf-8' });
        return JSON.parse(data);
    } //end method
    writeDB() {
        fs_1.default.writeFileSync(this._file, JSON.stringify(this.data));
    } // end method
} //end class
exports.default = InfoGeneral;
//# sourceMappingURL=InfoGeneral.js.map
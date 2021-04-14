"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const RecordSchema = new mongoose_1.Schema({
    user: {
        type: String,
        require: [true, 'User is requires']
    },
    name: {
        type: String,
        require: [true, 'Name is requires']
    },
    phone: {
        type: String,
        require: [true, 'Name is requires']
    },
    email: {},
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
}, {
    toObject: {
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.password;
            delete ret._v;
        }
    },
    toJSON: {
        transform: function (doc, ret) {
            ret.uid = ret._id;
            return ret;
        }
    }
});
exports.default = mongoose_1.default.model('Record', RecordSchema);
//# sourceMappingURL=records.js.map
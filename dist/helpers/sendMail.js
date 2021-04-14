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
const fs_1 = __importDefault(require("fs"));
const Config_1 = __importDefault(require("../Mail/Config"));
const handlebars_1 = __importDefault(require("handlebars"));
const send = (name, email, tel, message, idiom) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appRoot = process.cwd();
        const data = {
            name,
            email,
            tel,
            message,
        };
        const templateThanks = idiom === 'es' ? "/templates/es/thanks.html" : "/templates/en/thanks.html";
        const templateContact = idiom === 'es' ? "/templates/es/contact.html" : "/templates/en/contact.html";
        yield Promise.all([
            readHTMLFile(appRoot + templateThanks, data, true, idiom),
            readHTMLFile(appRoot + templateContact, data, false, idiom),
        ]);
    } //end try 
    catch (error) {
        throw new Error(error.toString());
    } //end catch
}); //end function
const processMail = (mailConfig) => {
    return new Promise((resolve, reject) => {
        Config_1.default.sendMail(mailConfig, (error, response) => {
            error ? reject(error) : resolve(true);
            Config_1.default.close();
        });
    });
}; //end function
const readHTMLFile = (path, data, isClient, idiom) => {
    const { name, email, tel, message } = data;
    return new Promise((resolve, reject) => {
        try {
            fs_1.default.readFile(path, { encoding: 'utf-8' }, (err, html) => __awaiter(void 0, void 0, void 0, function* () {
                const template = handlebars_1.default.compile(html);
                let replacements = {};
                if (isClient)
                    replacements = {
                        name
                    };
                else
                    replacements = {
                        name,
                        email,
                        tel,
                        message,
                    };
                const htmlToSend = template(replacements);
                let mailConfig = {};
                if (idiom === 'es')
                    //make mailable object
                    mailConfig = {
                        from: 'erickalvacontact@gmail.com',
                        to: isClient ? email : 'erickalvacontact@gmail.com',
                        subject: isClient ? 'Muchas Gracias!!!, en breve me pondre en contacto' : 'Tienes un nuevo mensaje de contacto de tu sitio web!!!',
                        html: htmlToSend
                    };
                else
                    mailConfig = {
                        from: 'erickalvacontact@gmail.com',
                        to: isClient ? email : 'erickalvacontact@gmail.com',
                        subject: isClient ? 'Thank you very much !!!, I will contact you shortly' : 'You have a new contact message from your website !!!',
                        html: htmlToSend
                    };
                const response = yield processMail(mailConfig);
                if (!response)
                    throw new Error(response.toString());
                resolve(true);
            }));
        } //end try 
        catch (error) {
            reject(error.toString());
        } //end catch
    }); //end promise
};
exports.default = send;
//# sourceMappingURL=sendMail.js.map
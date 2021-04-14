"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundController = exports.redirectController = exports.aboutController = exports.homeController = void 0;
const helpers_1 = require("../../helpers/helpers");
// En idioma por defecto es Espanol
let idiomSave = 'es';
const homeController = (req, res) => {
    const [, idiomUrl] = req.path.split('/');
    //Se hace persistente la variable idiomSave de acuerdo al idioma del request de la pagina  
    idiomSave = idiomUrl;
    //De acuerdo al idioma de la pagina donde se hizo la peticion es la informacion que devuelve
    const info = helpers_1.sendInformation(idiomUrl);
    res.render('page', {
        template: 'Erick Alva',
        namePage: 'Hola',
        title: 'Erick Alva | Portfolio',
        data: info,
        idiomUrl,
        whichPartial: function () {
            return "home";
        }
    });
}; //end function
exports.homeController = homeController;
const aboutController = (req, res) => {
    const [, idiomUrl] = req.path.split('/');
    idiomSave = idiomUrl;
    const { desc, experience } = helpers_1.sendInformation(idiomUrl);
    res.render('page', {
        template: 'Erick Alva',
        namePage: idiomUrl === 'en' ? 'About' : 'Acerca de',
        title: 'About | myPage',
        idiomUrl,
        whichPartial: function () {
            return "about";
        }
    });
}; //end function
exports.aboutController = aboutController;
const redirectController = (req, res) => {
    /*
        Para no perder la navegacion del idioma siempre que quieran ir
        al inicio se va al del idioma que se encuentra actualmente o donde fue
        la ultima peticion.
    */
    res.redirect(`/${idiomSave}`);
}; //end function
exports.redirectController = redirectController;
const notFoundController = (req, res) => {
    res.render('404', {
        name: '404',
        title: '404 | myPage',
    });
}; //end function
exports.notFoundController = notFoundController;
//# sourceMappingURL=LandingController.js.map
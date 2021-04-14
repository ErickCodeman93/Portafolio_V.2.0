"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controllers
const LandingController_1 = require("../../controllers/WEB/LandingController");
const routerWeb = express_1.Router();
routerWeb.get(/^\/(es|en)$/, LandingController_1.homeController);
routerWeb.get(/^\/(es|en)\/about$/, LandingController_1.aboutController);
routerWeb.get('/', LandingController_1.redirectController);
routerWeb.get('*', LandingController_1.notFoundController);
exports.default = routerWeb;
//# sourceMappingURL=landing.js.map
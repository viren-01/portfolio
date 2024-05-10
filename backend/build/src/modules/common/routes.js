"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Common_1 = __importDefault(require("./Controller/Common"));
class Router {
    constructor() {
        this.router = express_1.default.Router();
        this.createRoutes();
    }
    createRoutes() {
        try {
            this.router.post('/sendMail', Common_1.default.sendMail.bind(Common_1.default));
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new Router().router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../src/modules/common/routes"));
class AppRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.createRoutes();
    }
    createRoutes() {
        try {
            this.router.use('/common', routes_1.default);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new AppRouter().router;

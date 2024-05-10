"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AppRouter_1 = __importDefault(require("./Routes/AppRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', AppRouter_1.default);
app.get('/health', (req, res) => {
    res.send({ status: 200, message: 'success' });
});
exports.default = app;

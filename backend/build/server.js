"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = __importDefault(require("./app"));
const port = 1119;
const server = (0, http_1.createServer)(app_1.default);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

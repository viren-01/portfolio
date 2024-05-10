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
const ApiController_1 = __importDefault(require("./ApiController"));
const nodemailer_1 = require("nodemailer");
class CommonController {
    constructor() { }
    sendMail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body && Object.keys(req.body).length > 2)
                    return ApiController_1.default.sendErrorResponse(req, res, "Request Body Malformed", 400);
                let { email, message } = req.body;
                yield this.mailerService({ text: message, email });
                return ApiController_1.default.sendSuccessResponse(req, res, null, 'email sent successfully');
            }
            catch (error) {
                console.log("error", error);
                return ApiController_1.default.sendErrorResponse(req, res, error, 500);
            }
        });
    }
    mailerService(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, text } = params;
                let mailOptions = {
                    from: email,
                    to: "vishwakarmavirendra74@gmail.com",
                    subject: "Someone Sent You a message on Portfolio",
                    text
                };
                console.log(mailOptions);
                const transporter = (0, nodemailer_1.createTransport)({
                    host: 'smtp-relay.brevo.com',
                    port: 587,
                    tls: {
                        rejectUnauthorized: true,
                        minVersion: "TLSv1.2"
                    },
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    }
                });
                const send = yield transporter.sendMail(mailOptions);
                console.log("EMAIL", send);
                return send;
            }
            catch (error) {
                console.log("ERROR IN MAIL SERVICE", error);
                throw error;
            }
        });
    }
}
exports.default = new CommonController();

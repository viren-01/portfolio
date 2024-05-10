import { Request, Response } from "express";
import ApiController from "./ApiController";
import { createTransport } from 'nodemailer';

class CommonController {
    constructor() { }

    async sendMail(req: Request, res: Response) {
        try {
            if (req.body && Object.keys(req.body).length > 2) return ApiController.sendErrorResponse(req, res, "Request Body Malformed", 400)
            let { email, message } = req.body
            await this.mailerService({ text: message, email })
            return ApiController.sendSuccessResponse(req, res, null, 'email sent successfully')
        } catch (error) {
            console.log("error", error)
            return ApiController.sendErrorResponse(req, res, error, 500)
        }
    }

    async mailerService(params: any) {
        try {

            let { email, text } = params

            let mailOptions = {
                from: email,
                to: "vishwakarmavirendra74@gmail.com",
                subject: "Someone Sent You a message on Portfolio",
                text
            }

            console.log(mailOptions)

            const transporter = createTransport({
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
            })

            const send = await transporter.sendMail(mailOptions)
            console.log("EMAIL", send)
            return send

        } catch (error) {
            console.log("ERROR IN MAIL SERVICE", error)
            throw error
        }
    }
}

export default new CommonController()
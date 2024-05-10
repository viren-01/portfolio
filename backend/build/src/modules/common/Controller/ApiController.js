"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiController {
    sendSuccessResponse(req, res, data, message) {
        try {
            res.send({
                status: 200,
                message: message !== null && message !== void 0 ? message : 'success',
                data
            });
        }
        catch (error) {
            res.status(500).send({
                status: 500,
                message: 'error',
                error
            });
        }
    }
    sendErrorResponse(req, res, error, status) {
        try {
            res.send({
                status: status !== null && status !== void 0 ? status : 400,
                message: 'error',
                error
            });
        }
        catch (error) {
            res.status(500).send({
                status: 500,
                message: 'error',
                error
            });
        }
    }
}
exports.default = new ApiController();

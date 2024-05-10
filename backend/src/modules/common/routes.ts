import express from 'express';
import Common from './Controller/Common';

class Router {
    public router;
    
    constructor() {
        this.router = express.Router()
        this.createRoutes()
    }

    createRoutes() {
        try {
            this.router.post('/sendMail', Common.sendMail.bind(Common))
        } catch (error) {
            throw error
        }
    }
}

export default new Router().router
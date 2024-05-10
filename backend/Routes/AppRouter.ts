import express from 'express';
import CommonRouter from '../src/modules/common/routes';

class AppRouter {
    public router;
    
    constructor() {
        this.router = express.Router()
        this.createRoutes()
    }

    createRoutes() {
        try {
            this.router.use('/common', CommonRouter)
        } catch (error) {
            throw error
        }
    }
}

export default new AppRouter().router
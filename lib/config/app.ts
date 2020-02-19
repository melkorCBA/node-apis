// lib/app.ts

import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {UserRoutes} from '../routes/user.route'

class App {

    public app: express.Application;
    public mongoURL: string="mongodb://localhost/Atlas"
    private user_routes=new UserRoutes();

    constructor() {
        this.app = express();
        this.mongoSetup();
        this.config();        
        this.user_routes.route(this.app); //call route methode from routes.ts
        
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(){
        mongoose.Promise=global.Promise;
        mongoose.connect(this.mongoURL,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
    }

}

export default new App().app;
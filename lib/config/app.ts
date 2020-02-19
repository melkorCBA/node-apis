// lib/app.ts

import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public mongoURL: string="mongodb://localhost/Atlas"
    constructor() {
        this.app = express();
        this.mongoSetup();
        this.config();        
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
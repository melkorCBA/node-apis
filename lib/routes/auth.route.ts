import {Application, Request, Response} from 'express'
import {AuthController} from '../controllers/auth.controller'

export class AuthRoutes{

    private auth_controller=new AuthController();
    public route(app:Application){
       
        app.post('/signup', (req:Request, res:Response)=>{
            this.auth_controller.signup(req,res);
        })

        app.post('/login', (req:Request, res:Response)=>{
            this.auth_controller.login(req,res);
        })
    }
    

}
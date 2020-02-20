import {Application, Request, Response} from 'express'
import {UserController} from '../controllers/user.controllers'

//define routes
export class UserRoutes{
    private user_controller=new UserController();

    
    public route(app:Application){
        


        //Index
        app.get('/users', (req:Request,res:Response)=>{
            this.user_controller.index_user(req,res);

        });

        //CREATE
        app.post('/users', (req:Request,res:Response)=>{
            this.user_controller.create_user(req,res);
        });
        
        //show
        app.get('/users/:name', (req:Request, res:Response)=>{
            this.user_controller.show_user(req,res);
        });
    



    }

    
    



    

}
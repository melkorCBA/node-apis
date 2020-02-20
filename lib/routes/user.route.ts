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
        
        //show by user_name
        app.get('/users/:name', (req:Request, res:Response)=>{
            this.user_controller.show_user(req,res);
        });

        //Update by id
        app.put('/users/:id',(req:Request, res:Response)=>{
            this.user_controller.update_user(req,res);
        });

        //Destroy by id
        app.delete('/users/:id', (req:Request, res:Response)=>{
            this.user_controller.delete_user(req,res);
        });



    }

    
    



    

}
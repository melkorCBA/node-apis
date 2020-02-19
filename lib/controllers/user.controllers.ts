import {UserServices} from '../modules/services/user.service'
import {IUser} from '../modules/models/user.model'
import {Request, Response} from 'express'

export class UserController{
    private user_service= new UserServices();

    //controllers to services 
    //have to meet specific requirments to reach a certain services
    public create_user(req:Request, res:Response){
        if(req.body.user_name && req.body.email){
            let user_detail:IUser={
                //user_details will show a error untill the interface criteria is met
                user_name:req.body.user_name,
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                phone_number:req.body.phone_number,

            }

            this.user_service.createUser(user_detail,(err:any)=>{
                if(err){
                    res.status(500).json({message:"internel server error"});
                }
                else{
                    res.status(200).json({message:"succsessfull"});
                }
            })


        }
        else{
            res.status(422).json({message:"need both username or email"});
        }
    }

    public index_user(req:Request, res:Response){
        this.user_service.indexUser((err:any, user_data:IUser)=>{
            if(err){
                res.status(400).json({message:"internal server error"});
            }
            else{
                res.status(200).json({user_data});
            }
        });
    }
}
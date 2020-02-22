import {Request, Response} from 'express'
import {AdminServices}  from '../modules/services/admin.service'
import { IAdmin } from 'modules/models/admin.model';
import * as jwt from 'jsonwebtoken'
import config from '../config/config'

export class AuthController{
    private admin_service=new AdminServices();



    public signup(req:Request, res:Response){
        //check if username and password are set
        let {username, password}=req.body;
        if(!(username && password)){
            res.status(400).json({message:"username or password is missing"});

        }
        else{
            const hashedPassword=this.admin_service.hashPassword(password);
            let admin_details:IAdmin={
                username:username,
                password:hashedPassword,
            }

            this.admin_service.registorAdmin(admin_details, (err: any) => {
                if (err) {
                    res.status(500).json({ message: "internel server error" });
                }
                else {
                    res.status(200).json({ message: "succsessfull signup" });
                }
            })


        }
        
    

        

    }
}
import { Request, Response } from 'express'
import { AdminServices } from '../modules/services/admin.service'
import { IAdmin } from 'modules/models/admin.model';
import * as jwt from 'jsonwebtoken'
import config from '../config/config'

export class AuthController {
    private admin_service = new AdminServices();

    public signup(req: Request, res: Response) {
        //check if username and password are set
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).json({ message: "username or password is missing" });

        }
        else {
            const hashedPassword = this.admin_service.hashPassword(password);
            let admin_details: IAdmin = {
                username: username,
                password: hashedPassword,
            }

            this.admin_service.registorAdmin(admin_details, (err: any) => {
                if (err) {
                    res.status(500).json({ message: "internel server error" });
                }
                else {
                    //Sing JWT valid for 1 hour
                    const token = jwt.sign(
                        { username: username },
                        config.jwtSecret,
                        { expiresIn: "180" }
                    );
                    //send jwt in the response
                    res.setHeader("token", token);
                    res.status(200).json({ message: "succsessfull signup" });


                }
            })


        }

    }

    public login(req: Request, res: Response) {
        //check if username and password are set
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).json({ message: "username or password is missing" });

        }
        else {
            let admin_details: IAdmin = {
                username: req.body.username,
                password: req.body.password,
            }
            //get adminUsers from database
            this.admin_service.loginAdmin(admin_details, (err: any, foundedUser: IAdmin) => {
                if (err) {
                    res.status(400).json({ message: "Internal server error" })
                }
                else if (foundedUser === null) {
                    res.status(200).json({ message: "no such admin registered" })
                }
                else {
                    //check if encrypted password match
                    if (!this.admin_service.checkIfUnencryptedPasswordIsValid(admin_details.password, foundedUser.password)) {
                        res.status(401).json({ message: "passwords do not match" })
                    }
                    else {
                        //Sing JWT valid for 1 hour
                        const token = jwt.sign(
                            { username: foundedUser.username },
                            config.jwtSecret,
                            { expiresIn: "600s" }
                        );
                        //send jwt in the response
                        //res.setHeader("token", token);
                        res.status(200).json({ message: "succsessfull login" , token});//send jwt in the response
                    
                    }
                }
            })





        }

    }

}
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { TokenServices } from '../modules/services/token.service'
import { IToken } from "modules/models/token.model";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token_service = new TokenServices();
    //Get the jwt token from the head
    //console.log(req.headers["authorization"]);
    const bearerHeader = req.headers["authorization"];
    //check if bearer is undefined
    if (typeof (bearerHeader) !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        token_service.findByToken(token, (err:any, foundedToken:IToken) => {
            if (err) {

            }
            else {
                const jwtSecret = foundedToken.key;
                jwt.verify(token, jwtSecret, (err: any, decoded: object) => {
                    if (err) {
                        res.status(403).json({ message: "token invalid" })
                        return;
                    }
                    else {
                        console.log(typeof (decoded))
                        //Call the next middleware or controller
                        next();
                    }
                })
            }

        })


    }
    else {
        res.status(403).json({ message: "forbidden" })
        return

    }

};
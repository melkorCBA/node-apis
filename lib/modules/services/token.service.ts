import { IToken } from "modules/models/token.model";
import tokens from '../schemas/token.schema'

export class TokenServices{
    public createToken(token_details:IToken, callback:Function){
        const  token=new tokens(token_details);
        token.save(callback);
    }

    public findByToken(token:String, callback:Function){
        tokens.findOne({token:token}, callback)
    }
}
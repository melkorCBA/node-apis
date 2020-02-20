import users from '../schemas/user.schema';
import {IUser} from '../models/user.model';

export class UserServices{
    public createUser(user_details:IUser, callback:Function){
        const user=new users(user_details); //create a instance of the model
        user.save(callback);
    }

    public indexUser(callback:Function){
        users.find(callback);

    }

    public showUser(user_name:String,callback:Function){
        const query={user_name:user_name}
        users.findOne(query,callback);
    }
}
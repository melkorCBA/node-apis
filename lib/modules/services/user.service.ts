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

    public updateUser(user_id:String, update_query:IUser, callback:Function){
        users.findByIdAndUpdate(user_id,update_query,callback);
    }

    public deleteUser(user_id:String, callback:Function){
        users.findByIdAndDelete(user_id, callback);
    }
}

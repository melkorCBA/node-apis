import admins from '../schemas/admin.schema'
import { IAdmin } from '../models/admin.model'
import * as bcrypt from 'bcryptjs'

export class AdminServices {

    public registorAdmin(admin_details: IAdmin, callback: Function) {
        const admin = new admins(admin_details); //create a instance of the model
        admin.save(callback);
    }

    public loginAdmin(admin_details: IAdmin, callback: Function) {
        admins.findOne({username:admin_details.username},callback);

    }

    public changePasswordAdmin(admin_details: IAdmin, callback: Function) {

    }

    public hashPassword(password: String) {
        return bcrypt.hashSync(password, 8);
    }

    public checkIfUnencryptedPasswordIsValid(unencryptedPassword, hashPassword) {
        return bcrypt.compareSync(unencryptedPassword, hashPassword); //hashpassword is what stored in the datbase
    }


}
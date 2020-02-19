import * as mongoose from 'mongoose'

const   Schema=mongoose.Schema;
const   schema=new Schema({
    use_name:{
        type:String,
        unique:true,
    },

    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },

    email:{
        type:String,
    },
    phone_number:{
        type:String
    }
});

export default mongoose.model('user', schema);
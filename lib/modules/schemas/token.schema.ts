import * as mongoose from 'mongoose'

const Schema=mongoose.Schema;
const  schema= new Schema({
    token:{
        type:String
    },
    key:{
        type:String
    },

    admin_id:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"admin",
        
    }, 
    //expires after 3 minutes
    createdAt: { type: Date, index: { expires: '3m' }, default: Date.now }
});

export default mongoose.model('token', schema);
import * as mongoose from 'mongoose'

const Schema=mongoose.Schema;
const  schema= new Schema({
    token:{
        type:String
    },
    key:{
        type:String
    },

    username:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"admin",
        
    }, 
    createdAt: { type: Date, expires: '10m', default: Date.now }
});

export default mongoose.model('token', schema);
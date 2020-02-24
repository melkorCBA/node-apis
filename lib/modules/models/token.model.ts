import mongoose from 'mongoose'
export interface IToken{
    token:String,
    key:String,
    admin_id?:mongoose.Types.ObjectId

}
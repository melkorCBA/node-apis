import mongoose from 'mongoose'

export interface IAdmin{
    _id?:mongoose.Types.ObjectId
    username:String,
    password:String,
}
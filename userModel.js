import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String
    },
    password:{
        type:String
    }
})

const user = model('user', userSchema)

export default user;
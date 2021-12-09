import mongoose from "mongoose";

const { Schema } = mongoose;
const required = true;

const fileSchema = new Schema({
    fieldname: {type:String,required},
    originalname: {type:String,required,maxLength:200},
    encoding: {type:String,required},
    mimetype: {type:String,required},
    destination: {type:String,required},
    filename: {type:String,required},
    filename: {type:String,required},
    path: {type:String,required},
    size:{type:String,required}
})

export const File = mongoose.model("fileSchema",fileSchema);

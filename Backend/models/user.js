import mongoose from "mongoose";
import { hash,compare } from "../libs/crypto.js";


const { Schema } = mongoose;
const required = true;
const unique = true;

const UserSchema = new Schema({
    firstname: { type: String, required, minLength: 3 },
    lastname: { type: String, required, minLength: 3 },
    age:{type: Number, minLength: 3},
    email: { type: String, required, unique, minLength: 3 },
    password: { type: String, required, minLength: 15 }
});

UserSchema.statics.register = async (userData) => {
    userData.password = await hash(userData.password);
    try {
        return await User.create(userData);
    } catch (error) {
        console.error(error.message);
        return null
    }
};

UserSchema.statics.login = async (userData) => {
    const user = await User.findOne({ email: userData.email })
    if (!user) {
        return null;
    }
    return user.toJSON();
}
//to dont send password to client https://stackoverflow.com/questions/32390996/remove-one-property-from-mongoose-tojson-support
UserSchema.methods.toJSON = function () {
    const user=this.toObject()
    delete user.password
    return user
}

export const User = mongoose.model("fullstackusers", UserSchema)




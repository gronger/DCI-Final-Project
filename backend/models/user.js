import mongoose from "mongoose";
import { hash, compare } from "../libs/crypto.js";

const { Schema } = mongoose;
const required = true;
const unique = true;

const UserSchema = new Schema({
  //   accountType: { type: Number, required },
  username: { type: String, required, minLength: 3 },
  firstname: { type: String, required, minLength: 3 },
  lastname: { type: String, required, minLength: 3 },
  typeUser: { type: String, enum: ["talent", "pro"] },
  password: { type: String, required, minLength: 4 },
  height: {
    type: Number,
    required: function () {
      return this.typeUser === "talent";
    },
    minLength: 2,
    maxLength: 3,
  },
  weight: {
    type: Number,
    required: function () {
      return this.typeUser === "talent";
    },
    minLength: 2,
    maxLength: 3,
  },

  activity: {
    type: String,
    required: function () {
      return this.typeUser === "pro";
    },
  },
  lookingFor: {
    type: String,
    required: function () {
      return this.typeUser === "pro";
    },
  },

  age: { type: Number },
  email: { type: String, required, unique, minLength: 3 },
  password: { type: String, required, minLength: 3 },
});


UserSchema.statics.register = async (userData) => {
  userData.password = await hash(userData.password);
  try {
    return await User.create(userData);
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

UserSchema.statics.login = async (userData) => {
  //
  const user = await User.findOne({ email: userData.email });
  if (!user) {
    return null;
  }
  const sucsess = await compare(userData.password, user.password)
  if (!sucsess) {
    return null
  }
  return user.toJSON();
};
//to dont send password to client https://stackoverflow.com/questions/32390996/remove-one-property-from-mongoose-tojson-support
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export const User = mongoose.model("fullstackusers", UserSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    gender: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: { type: String, required: true }
    }
    },
    { timestamps: true, versionKey: false }
);

//signup method

userSchema.statics.signup = async function(
    name,
    email,
    password,
    phone_number,
    gender,
    address
){
    //validation
    if (!name || !email || !password || !phone_number || !gender || !address){
        throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
    throw Error("Email not valid");
    }
    if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
    }
    const exists = await this.findOne({ email });
    if (exists) {
    throw Error("Email already in use");
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

  // create user
    const user = await this.create({
    name,
    email,
    password: hash,
    phone_number,
    gender,
    address
    });

    return user;
};

//login mathod
userSchema.statics.login = async function(
    email,
    password,
){
    //validation
    if (!email || !password){
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
        if (!user) {
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
    throw Error("Incorrect password");
}

return user;
};

module.exports = mongoose.model("User", userSchema);
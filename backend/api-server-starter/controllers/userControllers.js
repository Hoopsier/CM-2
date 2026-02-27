const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create JWT

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // handles validation & comparison 
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({
        user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        gender: user.gender,
        address: user.address
        },
        token
    });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};
//signup user

const signupUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    street,
    city,
    zipCode
  } = req.body;

    try {
    // static signup method 
    const user = await User.signup(
        name,
        email,
        password,
        phone_number,
        gender,
        {
        street,
        city,
        zipCode
        }
    );

    const token = createToken(user._id);

    res.status(200).json({
        user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        gender: user.gender,
        address: user.address
        },
        token
    });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser };
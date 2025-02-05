require("dotenv").config();
const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const User = require("./models/user");

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req,res) => {
    res.json({data: "hello"});
});

//create account
app.post("/create-account", async (req,res) => {
    const {name,email,password,} = req.body;

    if(!name){
        return res
            .status(400)
            .json({error: "Name is required"});
    }

    if(!email){
        return res.status(400).json({error: "Email is required"});
    }

    if(!password) {
        return res
            .status(400)
            .json({error: "Password is required"});
    }

    const isUser = await User.findOne({email: email});

    if(isUser) {
        return res.json({
            error: true,
            message: "User already exists",
        });
    }

    const user = new User({
        name,
        email,
        password
    });

    await user.save();

    const accessToken = jwt.sign({user},process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "3600m",
    });

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registered Sucessfully"
    });
});

//login
app.post("/login", async (req,res) => {
    const {email,password} = req.body;

    if(!email){
        return res
            .status(400)
            .json({error: "Email is required"});
    }

    if(!password){
        return res
            .status(400)
            .json({error: "Password is required"});
    }

    const userInfo = await User.findOne({email:email});

    if(!userInfo){
        return res
            .status(400)
            .json({error: "User not found"});
    }

    if(userInfo.email == email && userInfo.password == password) {
        const user = {user: userInfo};
        const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "3600m",
        });

        return res.json({
            error: false,
            message: "Login Successful",
            email,
            accessToken
        });
    }else {
        return res.status(400).json({
            error: true,
            message: "Invald Credentials",
        });
    }
})

//get user
app.get("/get-user", authenticateToken,async(req,res) => {
    const {user} = req.user;
    const isUser = await User.findOne({_id:user._id});

    if(!isUser){
        return res.sendStatus(401);
    }

    return res.json({
        user: {name: isUser.name, email:isUser.email, "_id":isUser._id,createdOn: isUser.createdOn},
        message: "",
    });
});

app.listen(8000);

module.exports = app;


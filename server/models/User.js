const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,

        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/\S+@\S+\.\S+/],
        },
        password:{
            type: String,
            required: true,
            trim: true,

        },
        FirstName: {
            type: String,
            required: false,
            trim: true,

        },
        LastName: {
            type: String,
            required: false,
            trim: true,
        },
        Phone:{
            type: String,
            required: false,
            trim: true,
        },
        Portfolio:{
            type: String,
            required: false,
            trim: true,
        },
        Objective: {
            type: String,
            required: false,
            trim: true,
        },
        City:{
            type: String,
            required: false,
            trim: true,
        },
        State:{
            type: String,
            required: false,
            trim: true,
        },

        // Education
        eduaction: [],
        Skills: [],
        Experience: [],

    },
    {
        timestamps: true,
        
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;


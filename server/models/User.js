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
            default: '',
            trim: true,

        },
        LastName: {
            type: String,
            default: '',
            trim: true,
        },
        Phone:{
            type: String,
            default: '',
            trim: true,
        },
        Portfolio:{
            type: String,
            default: '',
            trim: true,
        },
        Objective: {
            type: String,
            default: '',
            trim: true,
        },
        City:{
            type: String,
            default: '',
            trim: true,
        },
        State:{
            type: String,
            default: '',
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


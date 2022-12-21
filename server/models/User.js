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

        }
    },
    {
        timestamps: true,
        
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;


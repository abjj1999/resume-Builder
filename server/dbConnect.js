const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const conectDB = mongoose.connection;

conectDB.on("connected", () => {
    console.log("Database connected");
});

conectDB.on("error", (err) => {
    console.log("Database error", err);
});
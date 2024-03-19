require("dotenv").config()
const mongoose = require("mongoose");
const uri = process.env.URI

const db = async() => {
    await mongoose.connect(uri);
};

module.exports = db; 






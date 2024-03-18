const mongoose = require("mongoose");

const db = async() => {
    await mongoose.connect("mongodb+srv://treloxiii:at9bzF1cT8pdu5XF@movies.sozg53e.mongodb.net/Movies?retryWrites=true&w=majority&appName=Movies");
};

module.exports = db; 






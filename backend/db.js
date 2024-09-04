const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/Inotebook-test";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

module.exports = connectToMongo;

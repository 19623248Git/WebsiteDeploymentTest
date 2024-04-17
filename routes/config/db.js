const mongoose = require('mongoose')
const MONGODB_URI = "mongodb+srv://traxdize:TubesARCKel7@jarkomwiki.m1qpauv.mongodb.net/wiki"
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
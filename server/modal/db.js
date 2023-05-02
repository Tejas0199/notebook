const mongoose = require('mongoose');

const db_url = "mongodb://127.0.0.1:27017/notebook";

const connectWithDb = async () => {
    try {
        await mongoose.connect(db_url)
        console.log("connected with Db")
    } catch (err) {
        console.log("not able connect with db",err);
    }
}

module.exports = connectWithDb;
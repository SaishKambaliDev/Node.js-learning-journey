const mongoose = require("mongoose")

async function connectDB() {

    await mongoose.connect(`mongodb+srv://saish:${process.env.db_password}.n5zpe1l.mongodb.net/halley`)

    console.log("Connected to database successfully");
}

module.exports = connectDB

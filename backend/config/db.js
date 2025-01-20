const mongoose = require('mongoose')
require('dotenv').config() // Loads the .env file

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI) // This should print the MongoDB URI to the console
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB

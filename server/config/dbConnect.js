const mongoose = require("mongoose");
const mongoUrl = process.env.MONGODB_URL

const dbConnection = async () => {
    // if db connected successfully
  try {
   await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
    // if getting any error
  } catch (error) {
    console.log("DB connection failed");
    console.log(error)
  }
};

module.exports = dbConnection;

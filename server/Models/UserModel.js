// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email is required"],
    unique: true,
  },
  username: {
    type:String,
    required:[true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt:{
    type: Date,
    default: new Date(),
  }
});



module.exports = mongoose.model("UserModel", userSchema);
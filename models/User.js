const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//create a new collection users with the predefined schema
mongoose.model("users", userSchema);

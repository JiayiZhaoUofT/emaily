const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const app = express();
mongoose.connect(keys.mongoURI);

//make sure the passport.js is executed, so we need to require it

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

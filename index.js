const express = require("express");
const app = express();
//make sure the passport.js is executed, so we need to require it
require("./services/passport");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

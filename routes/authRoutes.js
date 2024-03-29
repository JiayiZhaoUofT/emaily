const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  //for testing
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  app.get("/api/logout", (req, res) => {
    req.logout(); // remove the user id from the cookie
    res.send(req.user); // it should be empty
  });
};

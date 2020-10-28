const movieRoute = require("./movieRoute");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Welcome to the api-server");
  });

  movieRoute(app, fs);
};

module.exports = appRouter;

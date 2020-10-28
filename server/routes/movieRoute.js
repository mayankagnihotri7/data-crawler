const movieRoute = (app, fs) => {
  app.get("/movie", (req, res) => {
    fs.readFile("output.json", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.json(JSON.parse(data));
    });
  });
};

module.exports = movieRoute;

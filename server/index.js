const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

axios
  .get(
    "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating&count=100"
  )
  .then((response) => {
    let arr = [];
    const $ = cheerio.load(response.data);
    $(".lister-item").map(function (index, movie) {
      let movieName = $(this)
        .find(".lister-item h3.lister-item-header a")
        .text();

      let movieRatings = $(this)
        .find(".lister-item div.ratings-imdb-rating strong")
        .text();

      let movieStory = $(this)
        .find(".lister-item-content > p[class='text-muted']")
        .text()
        .trim();

      let movieRuntime = $(this)
        .find(".lister-item-content > .text-muted > .runtime")
        .text()
        .trim();

      let metaScore = $(this)
        .find(".lister-item-content div.ratings-metascore span")
        .text()
        .trim();

      let movieImage = $(this).find(".lister-item-image > a > img").attr("src");

      let obj = {
        movieImage,
        movieName,
        movieRatings,
        movieRuntime,
        movieRuntime,
        metaScore,
        movieStory,
      };
      arr.push(obj);
    });
    console.log(arr);
    fs.writeFile("output.json", JSON.stringify(arr), (err) => err);
  });

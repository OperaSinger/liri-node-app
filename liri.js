// Include the dotenv package:
require("dotenv").config();
// Include the request npm package:
var request = require("request");

var doThis = process.argv[2];
// console.log(process.env.OMDB_ID)
var word = ("");

var string = function() {
    for (i = 3; i < (process.argv.length - 2); i++) {
        var word = `${word}+${process.argv[i]} `;
    };
}

console.log(string);

switch (doThis) {
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        randomDo();
        break;
    default:
        console.log("You should have chosen more wisely");
}

function twitter() {

}

function spotify() {

}

function movie() {
// Then run a request to the OMDB API with the movie specified
request(`http://www.omdbapi.com/?t=${string}&y=&plot=short&apikey=${process.env.OMDB_ID}`, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    // console.log(JSON.parse(body));
  }
});
}

function randomDo() {

}


// Include the dotenv package:
require("dotenv").config();

// Include the request npm package:
var request = require("request");

var doThis = process.argv[2];
// console.log(process.env.OMDB_ID)
// var word = ("");

//     for (i = 3; i < process.argv.length; i++) {
//         word = `${word} ${process.argv[i]}`;
//     }; OR:::::
// var string = word.split(" ").join("+")
// console.log(string);

// slice will take in a string starting at index 3 until the end of input and insert a + sign for searches

var term = process.argv.slice(3).join("+");

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
};

function twitter() {

    var twitterURLQuery = "statuses/user_timeline"

    var params = { user_id: "1017118758001930253", count: 20 }

    client.get(twitterURLQuery, params, function (err, tweets) {

        if (!err) {
            for (let i = 0; i < tweets.length; i++) {
                console.log(`You tweeted "${tweets[i].text}" on ${tweets[i].created_at}\n`);
            }
        };
        if (err) {
            console.log(err);
        };
    });
};

// function spotify() {
    // var spotify = new Spotify(keys.spotify);
    // var client = new Twitter(keys.twitter);
//     // if no song entered, automatically put up info for
//     // The Sign by Ace of Base:

//     if (term == "") {
//         term = "The Sign";
//     // request the Spotify API:
//     request()

//     client.get('statuses/user_timeline', params , function (err,data,response) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }

//     }
// }

function movie() {

    if (term === "") {
        term = "Mr. Nobody";

        // Then run a request to the OMDB API with the movie specified
        request(`http://www.omdbapi.com/?t=${term}&y=&plot=short&apikey=${process.env.OMDB_ID}`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                console.log(`\nTitle of movie: ${JSON.parse(body).Title}`);
                console.log(`\nRelease Year: ${JSON.parse(body).Year}`);
                console.log(`\nIMDB Rating: ${JSON.parse(body).Ratings[0].Value}`);
                console.log(`\nRotten Tomatoes Rating: ${JSON.parse(body).Ratings[2].Value}`);
                console.log(`\nCountry where produced: ${JSON.parse(body).Country}`);
                console.log(`\nMovie Language: ${JSON.parse(body).Language}`);
                console.log(`\nPlot: ${JSON.parse(body).Plot}`);
                console.log(`\nActors: ${JSON.parse(body).Actors}`);
                console.log("\nIf you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>");
                console.log("It's on Netflix!");
            }
            else {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.
            }
        });
    }

    else {
            // Then run a request to the OMDB API with the movie specified

            request(`http://www.omdbapi.com/?t=${term}&y=&plot=short&apikey=${process.env.OMDB_ID}`, function (error, response, body) {

                // If the request is successful (i.e. if the response status code is 200)
                if (!error && response.statusCode === 200) {

                    console.log(`\nTitle of movie: ${JSON.parse(body).Title}`);
                    console.log(`\nRelease Year: ${JSON.parse(body).Year}`);
                    console.log(`\nIMDB Rating: ${JSON.parse(body).Ratings[0].Value}`);
                    console.log(`\nRotten Tomatoes Rating: ${JSON.parse(body).Ratings[2].Value}`);
                    console.log(`\nCountry where produced: ${JSON.parse(body).Country}`);
                    console.log(`\nMovie Language: ${JSON.parse(body).Language}`);
                    console.log(`\nPlot: ${JSON.parse(body).Plot}`);
                    console.log(`\nActors: ${JSON.parse(body).Actors}`);
                }
                else {
                    console.log('error:', error); // Print the error if one occurred
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    console.log('body:', body); // Print the HTML for the Google homepage.
                }


            })
        };

        function randomDo() {

        }
    };


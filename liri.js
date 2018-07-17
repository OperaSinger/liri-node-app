// Include the dotenv package:
require("dotenv").config();
// Include the fs npm package for reading/writing to files
var fs = require("fs");
// include the twitter npm package
var Twitter = require("twitter");
// include the Spotify npm package
var Spotify = require("node-spotify-api");
// Include the request npm package:
var request = require("request");
// Include the keys file
var keys = require("./keys")

var twitterObj = new Twitter(keys.twitter);

var doThis = process.argv[2];

// slice will take in a string starting at index 3 until the end of input and insert a + sign for searches

var term = process.argv.slice(3).join("+");

// switch statement to take in what choice user types after file name and call that respective function:
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

// function to display 20 of the most recent tweets from my account:
function twitter() {

    // Twitter documentation from NPM to retrieve data:
    var twitterURLQuery = "statuses/user_timeline";

    let paramsTwit = { screen_name: "LeenyaRideout", count: 20 };

    twitterObj.get(twitterURLQuery, paramsTwit, function (err, tweets, res) {
        if (!err) {

            // if no errors, print 20 tweets to screen
            for (let i = 0; i < tweets.length; i++) {
                console.log(`You tweeted "${tweets[i].text}" on ${tweets[i].created_at}\n`);
            }
        };
        if (err) {
            console.log(err);
        };
    });
};

// function to get song information for user input at command line starting at index 3 and print to screen.

function spotify() {

    // if - user enters nothing after the spotify-this-song command, then display information for Ace of Base's The Sign

    if (term == "") {
        term = "The Sign";

        // npm query constructor going through keys.js file (which pulls from the .env file

        var spotifyObj = new Spotify(keys.spotify);

        spotifyObj.search({ type: 'track', query: term }, function (error, data) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }

             // print track information to screen about THE SIGN:

            console.log(`\nArtist: ${JSON.stringify(data.tracks.items[0].artists[0].name)}`);
            console.log(`\nSong Name: ${JSON.stringify(data.tracks.items[0].name)}`);
            console.log(`\nClick here for a preview of the song: ${JSON.stringify(data.tracks.items[0].preview_url)}`);
            console.log(`\nAlbum: ${JSON.stringify(data.tracks.items[0].album.name)}`);
        });

    }
    else {

        // else branch will take in user input to search for song track information

        var spotifyObj = new Spotify(keys.spotify);

        spotifyObj.search({ type: 'track', query: term }, function (error, data) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }

            // print track information to screen about user input song name:

            console.log(`\nArtist: ${JSON.stringify(data.tracks.items[0].artists[0].name)}`);
            console.log(`\nSong Name: ${JSON.stringify(data.tracks.items[0].name)}`);
            console.log(`\nClick here for a preview of the song: ${JSON.stringify(data.tracks.items[0].preview_url)}`);
            console.log(`\nAlbum: ${JSON.stringify(data.tracks.items[0].album.name)}`);

        });

    }
};

// function called by user input "movie-this" and followed by input for film name.
function movie() {

    // 'if' will search for MR NOBODY if user does not enter film name

    if (term === "") {
        term = "Mr. Nobody";

        // Then run a request to the OMDB API with the movie specified
        request(`http://www.omdbapi.com/?t=${term}&y=&plot=short&apikey=${process.env.OMDB_ID}`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                // print movie information to screen

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
        // else will take in movie name entered by user and print information to screen.

        request(`http://www.omdbapi.com/?t=${term}&y=&plot=short&apikey=${process.env.OMDB_ID}`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                // if no errors logged, print information about film to screen.

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

};

function randomDo() {

    // read text from random.txt to use:

    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
       
        // split items up and choose the 2nd item (song title) to pass into the 'term' variable:

        var term = dataArr.slice(1).join("+");

       // perform spotify function to give details of query results to print to screen
        
        var spotifyObj = new Spotify(keys.spotify);

        spotifyObj.search({ type: 'track', query: term }, function (error, data) {
            if (error) {
                return console.log('Error occurred: ' + error);
            }
            else{

            // print track information to screen about user input song name:

            console.log(`\nArtist: ${JSON.stringify(data.tracks.items[0].artists[0].name)}`);
            console.log(`\nSong Name: ${JSON.stringify(data.tracks.items[0].name)}`);
            console.log(`\nClick here for a preview of the song: ${JSON.stringify(data.tracks.items[0].preview_url)}`);
            console.log(`\nAlbum: ${JSON.stringify(data.tracks.items[0].album.name)}`);
            }
        });

    });

}


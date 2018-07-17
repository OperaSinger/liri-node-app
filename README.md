liri-node-app

This Node application is modeled after SIRI - but using the command line in Node to take in user input choice for Twitter, Spotify and OMDB and display information based on that input. 

Getting started

To test and use this app on your local machine, you will have to download this GIT project in its entirety. You will also have to add your own account information for an .env file to allow access to the services LIRI provides. 

Those services include:
Twitter API
SPOTIFY API
OMDB API

In addition to those services, you will have to install NPM Node modules to communicate with the API’s to access and display the data. 

Incorporate the ‘npm install’ command after you have first initialized NPM in your file - to then get the correct dependencies. 

Those NPM modules include:

fs - for file system access
.env - for the internal resource file
request - to govern the request action to access each API
Twitter
OMDB
Spotify

Functionality

When all files are installed, at the command line, there are three commands to get information for the user. They are:

- node liri.js my-tweets (which prints out my, as the developer, most recent 20 tweets)

- node liri.js spotify-this-song <song title> (which prints out the information for the song - entered after this command. If no <song title> is entered, a surprise song is printed as a snarky response to having not been given a song by the user)

- node liri.js movie-this <movie name> (this will print out details of a movie, with name entered by the user. 

- node liri.js do-what-it-says (this will print out song name from the Spotify api, a title pulled from the random.txt file in the file folder)

Built with:

Javascript
node.js
npm modules
API queries

Author: 

Vale Rideout

Acknowledgements

Thanks much to the instructors, TA’s and Tutors through Rutgers CS Bootcamp, 2018



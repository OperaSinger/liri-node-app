{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf400
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww14400\viewh11400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\b\fs28 \cf0 liri-node-app
\b0\fs24 \
\
This Node application is modeled after SIRI - but using the command line in Node to take in user input choice for Twitter, Spotify and OMDB and display information based on that input. \
\

\b\fs28 Getting started
\b0\fs24 \
\
To test and use this app on your local machine, you will have to download this GIT project in its entirety. You will also have to add your own account information for an .env file to allow access to the services LIRI provides. \
\
Those services include:\
Twitter API\
SPOTIFY API\
OMDB API\
\
In addition to those services, you will have to install NPM Node modules to communicate with the API\'92s to access and display the data. \
\
Incorporate the \'91npm install\'92 command after you have first initialized NPM in your file - to then get the correct dependencies. \
\
Those NPM modules include:\
\
fs - for file system access\
.env - for the internal resource file\
request - to govern the request action to access each API\
Twitter\
OMDB\
Spotify\
\

\b\fs28 Functionality
\b0\fs24 \
\
When all files are installed, at the command line, there are three commands to get information for the user. They are:\
\
- node liri.js my-tweets (which prints out my, as the developer, most recent 20 tweets)\
\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 - node liri.js spotify-this-song <song title> (which prints out the information for the song - entered after this command. If no <song title> is entered, a surprise song is printed as a snarky response to having not been given a song by the user)\
\
- node liri.js movie-this <movie name> (this will print out details of a movie, with name entered by the user. \
\
- node liri.js do-what-it-says (this will print out song name from the Spotify api, a title pulled from the random.txt file in the file folder)\
\

\b\fs28 Built with:
\b0\fs24 \
\
Javascript\
node.js\
npm modules\
API queries\
\

\b\fs28 Author: 
\b0\fs24 \
\
Vale Rideout\
\

\b\fs28 Acknowledgements\

\b0\fs24 \
Thanks much to the instructors, TA\'92s and Tutors through Rutgers CS Bootcamp, 2018\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 \
\
}
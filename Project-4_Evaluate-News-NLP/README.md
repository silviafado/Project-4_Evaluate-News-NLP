# Project Instructions

The goal of this project:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Using Natural Language Processing (NLP) that can interpret natural human speech

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.


## Getting started

Followed the steps from the course up to Lesson 4 but don't add Service Workers just yet.


## Setting up the API

- Set an API key in https://www.meaningcloud.com
- Environment Variables: declare our API keys. Private keys, visible publicly are never a good thing, we are using enviornment variables that only belong to our system and won't be visible in Github when pushing our project. 

### Setting up Environment Variables

- [ ] Install the dotenv package with npm ```npm install dotenv```. 
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it:
```
// API_KEY for sentiment analysis
const apiKey = process.env.API_KEY;
```

### Using the API

Set up the API call request, post the response in a local server and have the UI updated with the info. The API call starting point will be the URL that the user introduce in the form, and will be called with an eventListener when clicking the Analyse button.


## Testing using Jest Framework

Jest is a framework for testing JavaScript projects, provides us the ability to create, and run unit tests. We will write tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input. 

## Service Workers

"Offline Functionality": The project must have set up service workers in webpack.
Go to the webpack config file, and add the setup for service workers. Test that the site should be available even when you stop your local server.
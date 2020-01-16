const request = require(`request`);


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    // dealing with the main body
    callback(error, JSON.parse(body));
  });
};

// Exports
module.exports = {
  fetchBreedDescription
};


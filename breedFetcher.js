const request = require(`request`);


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    // Hint the programmer about errors
    console.log('error:', error);
    // Hint the programmer about response status codes
    console.log('statusCode:', response && response.statusCode);

    // dealing with the main body
    callback(error, JSON.parse(body)[0][`description`]);
  });
};

// Exports
module.exports = {
  fetchBreedDescription
};


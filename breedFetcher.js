const request = require(`request`);


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    // Hint the programmer about errors
    // console.log('error:', error);
    // Hint the programmer about response status codes
    // console.log('statusCode:', response && response.statusCode);

    if (JSON.parse(body)[0] === undefined) {
      callback(`Error: Nothing is found`);
    } else {
      callback(error, JSON.parse(body)[0][`description`]);
    }
  });
};

// Exports
module.exports = {
  fetchBreedDescription
};


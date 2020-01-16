const request = require(`request`);


const getCatData = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    // dealing with the main body
    const data = JSON.parse(body);
    console.log(data[0]);
    console.log(typeof data);

  // callback(body, location);
  });
};

const parseCommandArg = function() {
  return process.argv.slice(2);
};

getCatData(parseCommandArg()[0]);

// git add
const request = require(`request`);


const getCatData = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    // dealing with the main body
    callback(JSON.parse(body));
  });
};

const parseCommandArg = function() {
  return process.argv.slice(2);
};

// What to do after receiving catObj
const doCatData = function(catObjs) {
  if (catObjs.length === 0) {
    console.log("Error: No Cat Found");
    return;
  }

  console.log(typeof catObjs);
  console.log(catObjs);
  
};

getCatData(
  parseCommandArg()[0],
  doCatData
);
// Imports
const breedFetcher = require(`./breedFetcher`);

const parseCommandArg = function() {
  return process.argv.slice(2);
};

// What to do after receiving catObj
const doCatData = function(error, catObjs) {
  if (catObjs.length === 0) {
    console.log("Error: No Cat Found");
    return;
  }

  console.log(typeof catObjs);
  console.log(catObjs);
};

// Testrun code
breedFetcher.fetchBreedDescription(
  parseCommandArg()[0],
  doCatData
);
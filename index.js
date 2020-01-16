// Imports
const breedFetcher = require(`./breedFetcher`);

const parseCommandArg = function() {
  return process.argv.slice(2);
};

const doWhateverYouDoWhenYouRunIntoErrors = function(error) {
  console.log(error);
};

// What to do after receiving catObj
const doCatData = function(error, description) {
  if (error !== null) {
    doWhateverYouDoWhenYouRunIntoErrors(error);
    return;
  }

  console.log(typeof description);
  console.log(description);
};

// Testrun code
let breedName = parseCommandArg()[0];
breedFetcher.fetchBreedDescription(
  breedName,
  doCatData
);
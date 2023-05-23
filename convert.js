
const csvFilePath = './combined_rankings.csv';
const csvToJson = require('csvtojson');

csvToJson()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    require('fs').writeFileSync('./src/combined_rankings.json', JSON.stringify(jsonObj, null, 2));
  });

const request = require('request');
const fs = require('fs');//allows you to qqwork with file systrem.
let myArgs = process.argv.slice(2); // give input from command line
let url = myArgs[0];
let path = myArgs[1];
request(url, (error, response, body) => {
  fs.writeFile(path, body, (err) => {
    if (err)
      console.log("There is an error:", err);
    else {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}`);

    };
  });

});

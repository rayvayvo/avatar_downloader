var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');


//function that pulls up a list of contributors, pulls out the first 3 keys of each object,
//the third being a URL, and downloads all the images from the  URLs
function getRepoContributors(repoOwner, repoName, cb) {
  // needs work still
  request.get('https://api.github.com/repos/jquery/jquery/contributors')

    .on('error', function(err) {
      console.log('error, error. danger will robinson!');
    })
    .on('response', function(response) {
      console.log('Response status code: ', response.statusCode);
    })
    // .pipe(fs.createWriteStream('./avatars/'));
    };




getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

var request = require('request');
var fs = require('fs');
var GITHUB_USER = "rayvayvo";
var GITHUB_TOKEN = "429ecee99249ff0283a5659df205e8ccc3c2864b";


console.log('Welcome to the GitHub Avatar Downloader!');

//function that pulls up a list of contributors, pulls out the first 3 keys of each object,
//the third being a URL, and downloads all the images from the  URLs
function getRepoContributors(repoOwner, repoName, cb) {
  // needs work still
var requestURL = 'https://' + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';


var options = {
  url: requestURL,
  headers: {
  'User-Agent': "GitHub Avatar Downloader"
  }
};
// console.log(requestURL);
// console.log(options);

  request.get(options)



    .on('error', function(err) {
      console.log('error, error. danger will robinson!');
    })
    .on('response', function(response) {
      console.log('Response status code: ', response.statusCode);
      console.log(response.body);
    })
  //   // .pipe(fs.createWriteStream('./avatars/'));
    };


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});



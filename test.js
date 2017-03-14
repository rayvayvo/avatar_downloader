

var request = require('request');

var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'batman'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);
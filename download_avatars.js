var request = require('request');
var secrets = require('./secrets.js');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${secrets.GITHUB_TOKEN}`
    }

  };

  request(options, (err, res, body) => {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", (err, results) => {
  console.log("Errors:", err);
  console.log("Result:", results);
  const contributors = JSON.parse(results);
  contributors.forEach((contributor) => {
    console.log(contributor.avatar_url);
  });


});
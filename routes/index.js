

var request = require('request');

exports.repos = function(req, res){
  request({url: 'https://api.github.com/repositories', json: true}, function(err, resp, body) {
    var repos = [],
        i = 0;

    for(; i < 8; i++)
      repos.push(body[i]);

    res.render('index', { repos: repos });

  });
};

exports.languages = function(req, res) {
  var url = 'https://api.github.com/repos/' + req.query.full_name + '/languages';

  request({url: url, json: true}, function(err, resp, languages) {

    res.render('repo-languages', {
      repoName: req.params.name,
      languages: languages
    });

  });
};
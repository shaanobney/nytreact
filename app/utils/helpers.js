var axios = require('axios');
var APIKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";
// var searchURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8aaababbcb3b4a1090ba37660f62ff69";
var helpers = {
    runQuery: function(term, start, end) {
        var term = term.trim();
        var start = start.trim() + "0101";
        var end = end.trim() + "1231";
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': APIKey,
                'q': term,
                'begin_date': start,
                'end_date': end
            }
        }).then(function(results) {
            return results.data.response;
        });
    },
    getSaved: function() {
        return axios.get('/api/saved').then(function(results) {
            return results;
        })
    },
    postSaved: function(title, date, url) {
        var newArticle = {
            title: title,
            date: date,
            url: url
        };
        return axios.post('/api/saved', newArticle).then(function(results) {
            return results._id;
        })
    },
    deleteSaved: function(title, data, url) {
        return axios.delete('/api/saved', {
            params: {
                'title': title,
                'data': data,
                'url': url
            }
        }).then(function(results) {
            return results;
        })
    }
}

module.exports = helpers;

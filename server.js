//DEPENDENCIES
var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var Article = require('./models/model.js');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('./public'));

// MONGO DB CONFIG
mongoose.connect('mongodb://localhost/homework');
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function() {
    console.log('Connected Successfully');
});

// MAIN
app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
})

// SAVED
app.get('/api/saved', function(req, res) {

    Article.find({}).exec(function(err, doc) {

        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    })
});

// ADD SAVED
app.post('/api/saved', function(req, res) {
    var newArticle = new Article(req.body);

    console.log(req.body)

    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    newArticle.save(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc._id);
        }
    });
});

// DELETE
app.delete('/api/saved/', function(req, res) {

    var url = req.param('url');

    Article.find({"url": url}).remove().exec(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send("Deleted");
        }
    });
});

app.listen(PORT, function() {
    console.log("Listening on Port : " + PORT);
});

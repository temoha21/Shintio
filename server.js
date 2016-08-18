var config = require(__dirname + '/config')();
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/Shintio', function(err, db) {
    if(err) {
        console.log('Sorry, there is no mongo db server running.');
    } else {
        var attachDB = function(req, res, next) {
            req.db = db;
            next();
        };
        var app = require(__dirname + '/app/app')
        , port = config.port;
        app.listen(port, function () {
            console.log('Listening on port ', port)
        })
    }
});
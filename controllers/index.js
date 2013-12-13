'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'octohost' };
        
        res.render('index', model);
        
    });

};

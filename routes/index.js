var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //real log in
    var sess = req.session;
    console.log("sesja: " + sess);

    if (sess.email) {
        //user logged in
    } else {
        sess.email = 'mail@gmail.com'; //set email from mongodb
    }

    //render
    res.render('index', {
        title: "Welcome: " + sess.email,
        data: sess.id
    });
});

module.exports = router;

let router = require('express').Router();

router.get('/', function(req, res){
    res.json({
        status: 'API Works',
        message: 'Welcome to restAPI'
    });
});


module.exports = router;
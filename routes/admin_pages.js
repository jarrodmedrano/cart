const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Admin'
    });
});

//exports
module.exports = router;
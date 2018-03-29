const express = require('express');
const router = express.Router();

/*
    * GET pages index
 */

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Admin'
    });
});

/*
    * GET add page
 */

router.get('/add-page', function(req, res) {
    var title = '';
    var slug = '';
    var content = '';

    res.render('admin/add_page', {
        title: title,
        slug: slug,
        content: content
    });
});

/*
    * Post add page
 */

router.post('/add-page', function(req, res) {
    req.checkBody('title', 'title must have value').notEmpty();
    req.checkBody('content', 'content must have value').notEmpty();

    var title = req.body.title;
    var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if( slug === "") slug = slug.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;

    var errors = req.validationErrors();

    if(errors) {
        res.render('admin/add_page', {
            errors: errors,
            title: title,
            slug: slug,
            content: content
        });
    } else {
        console.log('success');
    }

});

//exports
module.exports = router;

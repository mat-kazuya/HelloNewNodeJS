var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    // header moduleを用意
    var header = require('../models/header');

    // スマホ表示
    if (header.isSmartPhone(req)) {
        res.render('index_sp', { title: 'Express for SmartPhone' });
    }

    // PC表示
    res.render('index_pc', { title: 'Express for PC' });
});

module.exports = router;

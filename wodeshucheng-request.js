var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconvLite = require('iconv-lite');

request.get({ url: 'https://www.wodeshucheng.com/book_72800/35393506.html', encoding: null }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var buf = iconvLite.decode(body, 'gb2312');
        var $ = cheerio.load(buf);
        console.log($('.reader').text());
    }
});
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// 使用递归方式获取小说章节url
const URL = 'http://www.xbiquge.la/13/13959/5939025.html';
var book_Url = 'http://www.xbiquge.la';
var chapterObj = [];

function myNodeWist(url, callback) {
    var option = {
        url: url,
        encoding: null
    }
    request(option, callback)
}

function getNavol(url) {
    myNodeWist(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var $ = cheerio.load(body);
            var href = $('.bottem2').find('a').eq(3).attr('href');
            var chapterUrl = book_Url + href;
            chapterObj.push(chapterUrl);
            if (href != 'undefined') {
                console.log(chapterObj);
                getNavol(chapterUrl);
            } else {
                console.log('over');
                return;
            }
        }
    })
}

getNavol(URL);
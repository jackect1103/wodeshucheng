var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var iconvLite = require('iconv-lite');

request({ url: 'http://www.xbiquge.la/13/13959/5939025.html', encoding: null }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var buf = iconvLite.decode(body, 'utf8');
        var $ = cheerio.load(buf);
        try {
            fs.appendFileSync('biquge.html', $.html());
            console.log('数据已追加到文件');
        } catch (err) {
            /* 处理错误 */
        }
        // console.log($('.reader').text());
    }
});
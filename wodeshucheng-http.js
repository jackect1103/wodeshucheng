var https = require('https');
var cheerio = require('cheerio');
var fs = require('fs');
var iconvLite = require('iconv-lite');

https.get('https://www.wodeshucheng.com/book_72800/35393506.html', function (response) {
    var html = '';
    var length = 0;
    var arr = [];
    response.on('data', function (data) {
        arr.push(data);
        length += data.length;
    }).on('end', function () {
        // 解决数据乱码问题
        var data = Buffer.concat(arr, length);
        var change_data = iconvLite.decode(data, 'gb2312');
        var $ = cheerio.load(change_data.toString());
        try {
            fs.appendFileSync('wodeshuchengHttps.txt', $('.reader').text());
            console.log('数据已追加到文件');
        } catch (err) {
            /* 处理错误 */
        }
        // console.log($('.reader').html());
    }).on('error', function (error) {
        console.log(error.message);
    })
})  
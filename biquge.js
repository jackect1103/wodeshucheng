var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// 使用递归方式获取小说章节url
const URL = 'http://www.xbiquge.la/13/13959/5939025.html';
var book_Url = 'http://www.xbiquge.la';
var chapterObj = [];
var fileName = '圣墟.json'

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
            var title = $('.bookname>h1').text();
            var content = $('#content').text().trim();
            var nextChapter = {
                title: title,
                url: chapterUrl,
                content:content
            }
            // 异步读取
            fs.readFile(fileName, function (err, data) {
                if (err) {
                    chapterObj.push(nextChapter)
                    console.log(`${fileName}文件不存在!`);
                    fs.appendFileSync(fileName, JSON.stringify(chapterObj));
                    console.log('创建文件成功');
                } else {
                    var Array = JSON.parse(data);
                    Array.push(nextChapter);
                    fs.writeFile(fileName, JSON.stringify(Array), (err) => {
                        if (!err) console.log('success');
                    })
                }
            })

            if (href != 'undefined') {
                getNavol(chapterUrl);
            } else {
                console.log('over');
                return;
            }
        }
    })
}

getNavol(URL);
# 用node爬取我的书城小说站点
 - 爬取的站点 https://www.wodeshucheng.com

 ## 使用https，cheerio，fs，iconv-lite
 - 由于我们爬去的站点是HTTPS协议所以我们使用https包
 - 使用cheerio包，它类似与我们熟知的jquery，给服务端用来操作dom的
 - 使用fs将爬取到的数据写进文件中
 - 由于我爬取到的数据出现乱码现象，所以使用iconv-lite处理在各种操作系统出现的各种奇特编码
   + 该模块不提供读写文件的操作，只提供文件编码转换的功能。

参照资料：
https://blog.csdn.net/qq_33565573/article/details/76081994
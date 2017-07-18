//pipe 管道流
//边下载边pipe

/**pipe可以监听data和end事件
*   图片中数据会自动发送给客户端
*   可以控制后端压力，node将少的缓存放内存中
* 	
**/

var http = require('http')

var fs = require('fs') // 加载文件系统
var request = require('request')

http.createServer(function(req, res) {

	//从本地读取图片
	// fs.createReadStream('../buffer/logo.png').pipe(res)


	//从线上读取图片
	request('http://img.mukewang.com/user/5458463b0001358f02200220-40-40.jpg').pipe(res)
}).listen(8090)
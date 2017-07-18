//stream流


var http = require('http')

var fs = require('fs') // 加载文件系统

http.createServer(function(req, res) {

	//读取文件到内存
	fs.readFile('../buffer/logo.png', function(err, data) {

		if (err) {
			res.end('file not exist!')
		}else {
			//写入返回头
			res.writeHeader(200, {'Cnotext-Type': 'text/html'})
			res.end(data)
		}
	})
}).listen(8090)
//文件copy
//

var fs = require('fs')


var readStream = fs.createReadStream('test.mp4')

var writeStream = fs.createWriteStream('test-stream.mp4')

readStream.on('data', function(chunk) {
	// writeStream.write(chunk)  //要判断缓存区
	//数据还在缓冲区
	if (writeStream.write(chunk) === false) {
		console.log('still cached')
		readStream.pause()
	}

})

readStream.on('end',function() {
	writeStream.end() //关闭数据流
})

//数据耗尽，已被消费，写入目标
writeStream.on('drain', function() {
	console.log('data drain')
	readStream.resume()
})
//stream是基于事件工作的

var fs = require('fs')

var readStream = fs.createReadStream('test.mp4') //该文件大小1747KB /28次 
var n = 0 //计数器

//数据流传递调用data
readStream.on('data', function(chunk) {
	n++
	console.log('data emits')
	console.log(Buffer.isBuffer(chunk)) // 流以buffer传输
	// console.log(chunk.toString('utf8'))
	readStream.pause()  //暂停
	console.log('data pause')

	setTimeout(function() {
		console.log('data pasuse end')
		readStream.resume()  //重启
	},10)

}) //可读
.on('readable', function() {
	console.log('data readable')
})//console.log(chunk.toString('utf8'))
.on('end', function() {
	console.log(n)
	console.log('data ends')
})
.on('close', function() {
	console.log('data close')
})
.on('error', function(e) {
	console.log('data read error ' + e)
})

//可读流和可写流内部处理逻辑扩展

//创造构造函数
var Readable = require('stream').Readable
var Writable = require('stream').Writable


var readStream = new Readable()
var writeStream = new Writable()

readStream.push('I ')
readStream.push('like ')
readStream.push('play ')
readStream.push('basketball \n')
readStream.push(null)

//重写write方法
writeStream._write = function(chunk, encode, cb) {
	console.log(chunk.toString())
	cb()
}

//通过pipe传递
readStream.pipe(writeStream)

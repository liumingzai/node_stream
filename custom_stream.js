//自定制的的读写流

var stream =  require('stream')
var util = require('util')

//定制可读流
function ReadStream() {
	stream.Readable.call(this) //修改上下文
}

util.inherits(ReadStream, stream.Readable) //继承流stream可读的原型

//重写read
ReadStream.prototype._read = function() {
	this.push('I ')
	this.push('like ')
	this.push('play ')
	this.push('basketball \n')
	this.push(null)
}

//定制可写流
function WritStream() {
	stream.Writable.call(this)
	//声明cache，buffer
	this._cached = new Buffer('')

}
util.inherits(WritStream, stream.Writable) 

WritStream.prototype._write = function(chunk, encode, cb) {
	console.log(chunk.toString())
	cb()
}

//定制转换流
function TransformStream() {
	stream.Transform.call(this)
}

//第一个参数是转换(继承),第二个是被转换(要继承)
util.inherits(TransformStream,stream.Transform)

TransformStream.prototype._transform = function(chunk, encode,cb) {
	this.push(chunk)  //push数据块chunk
	cb()
}

TransformStream.prototype._flush = function(cb) {
	this.push('Oh Yeah!')  //加入定制的内容,如前后缀
	cb()
	
}

var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransformStream()

rs.pipe(ts).pipe(ws)
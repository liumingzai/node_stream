//stream在流对象进行图片拷贝

var fs = require('fs')

var source = fs.readFileSync('../buffer/logo.png')

fs.writeFileSync('stream_copy_logo.png', source) //source读出流的数据

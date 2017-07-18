
//重写视频copy[stream_copy_mp4.js]

var fs = require('fs')

fs.createReadStream('test.mp4').pipe(fs.createWriteStream('test_copy.mp4'))
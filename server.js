const Stream = require('node-rtsp-stream-jsmpeg')

const options = {
  name: 'streamName',
  url: 'rtsp://admin:shuihe123456@192.168.10.122:554/h264/ch1/main/av_stream',
  wsPort: 3333
}

// const Stream = require('node-rtsp-stream-es6');

// const options = {
//   name: 'streamName',
//   url: 'rtsp://admin:shuihe123456@192.168.10.122:554/h264/ch1/main/av_stream',
//   port: 3333
// }

stream = new Stream(options)
stream.start()
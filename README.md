## node-rtsp-stream-jsmpeg-example

node-rtsp-stream-jsmpeg  + jsmpeg 使用列子，解决 rtsp 视频流在页面中的播放


##  node-rtsp-stream-jsmpeg + jsmpeg.js 模块来解决 rtsp 视频流的需求

#### 环境配置

安装 ffmpeg  这个网上搜教程， 终端 输入 ffmpeg -version 如果显示版本，表示已经安装

安装nodejs，这个前端来说是基本环境，不多说

参数更多配置项 参考 node-rtsp-stream-es6 模块

jsmpeg.min.js  可以用自己 cdn 上的，如果 你是 npm 安装 jsmpeg 包的话，不需要 script 标签引入。直接 import 就可以

提供了很多方法，可以自定义播放暂停等按钮，来操作视频

##  这个适用于摄像头预览的需求（比如海康威视），如果需要 AI 人工智能，还是要 c++ /c /Java 封装


clone 项目

```
npm install 


npm run websoketServer

注意：把rtsp 路径替换成自己的 rtsp 视频流路径。
```
然后在浏览器中打开 index.html 就可以看到demo 了


缺点： 清晰度不够高清

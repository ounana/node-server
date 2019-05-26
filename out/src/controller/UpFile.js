"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
/**
 * @upfile 上传
 * 目前只支持单个文件上传，图片/文本等
 */
var UpFile = /** @class */ (function () {
    function UpFile() {
    }
    UpFile.prototype.POST = function (req, res) {
        var chunks = [];
        req.on('data', function (chunk) {
            chunks.push(chunk);
        });
        req.on('end', function () {
            // const boundary=req.headers['content-type'].split('boundary=')[1] //多文件分割符
            //拿到总的数据体
            var buffers = Buffer.concat(chunks);
            //统计\r\n数据的索引位置
            var rems = [];
            for (var i = 0; i < buffers.length; i++) {
                //13代表\r 10代表\n
                if (buffers[i] == 13 && buffers[i + 1] == 10) {
                    rems.push(i);
                }
            }
            //获取上传信息
            console.log(rems);
            console.log('第一行');
            console.log(buffers.slice(0, rems[0]).toString());
            console.log('第二行');
            console.log(buffers.slice(rems[0] + 2, rems[1]).toString());
            console.log('第三行');
            console.log(buffers.slice(rems[1] + 2, rems[2]).toString());
            console.log('第四行');
            console.log(buffers.slice(rems[2] + 2, rems[3]).toString());
            console.log('第五行');
            // console.log(buffers.slice(rems[3]+2,rems[4]).toString())
            //文件名
            console.log('文件名');
            var fileName = buffers.slice(rems[0] + 2, rems[1]).toString().match(/(?<=filename=")[^"]+(?=")/)[0];
            console.log(fileName);
            //文件内容
            var fileBuf = buffers.slice(rems[3] + 2, rems[rems.length - 2]);
            fs_1.writeFileSync("./public/" + fileName, fileBuf, 'utf8');
            //相应客户端
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ sucess: true, result: '上传成功' }));
        });
    };
    UpFile.PATH = '/api/upfile';
    return UpFile;
}());
exports.default = UpFile;
//# sourceMappingURL=UpFile.js.map
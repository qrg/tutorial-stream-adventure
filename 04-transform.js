var through = require('through2');
var stream = through(write, end);

function write(buffer, encpoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}
function end(done) {done();}

// 1. through2 を利用してみる
//process.stdin.pipe(stream).pipe(process.stdout);

// 2. through2 を利用しないでみる
process.stdin.on('data', function (chunk) {
  process.stdout.write(chunk.toString().toUpperCase());
});

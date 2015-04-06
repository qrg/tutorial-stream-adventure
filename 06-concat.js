var concat = require('concat-stream');

var printReversed = function(buffer){
  process.stdout.write(buffer.toString().split('').reverse().join(''));
};

// 何か入力して C-d 押したあとじゃないと結果みれない
process.stdin.pipe(concat(printReversed));


// こうするとリアルタイムに返ってくるけど verify すると not correct
/*
var stream = process.stdin;

stream.on('data', function(buf){
  concat(printReversed(buf));
});
*/

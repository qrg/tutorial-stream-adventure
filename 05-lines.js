var split = require('split');
var through2 = require('through2');

var count = 0;

var isEven = function (num) {
  return num % 2 === 0
};

process.stdin
  .pipe(split())
  .pipe(through2(function (chunk, enc, callback) {
    count++;

    this.push(
      isEven(count)
        ? chunk.toString().toUpperCase() + '\n'
        : chunk.toString().toLowerCase() + '\n'
    );

    callback();
  }))
  .pipe(process.stdout);

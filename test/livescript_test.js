
var grunt = require('grunt');

function read(fileName) {
  var content = grunt.file.read(fileName);
  // ensures tests passing on windows
  content =  content.replace(/\r/g,'');
  return content;
}

exports.livescript = {
  compile: function(test) {
    'use strict';

    test.expect(2);

    var actual = read('tmp/livescript.js');
    var expected = read('test/expected/livescript.js');
    test.equal(expected, actual, 'should compile livescript to javascript');

    actual = read('tmp/concat.js');
    expected = read('test/expected/concat.js');
    test.equal(expected, actual, 'should compile multiple livescript files to a single javascript file');

    test.done();
  }
};

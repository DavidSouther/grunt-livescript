var grunt = require('grunt');
var fs = require('fs');

exports.livescript = {
  compile: function(test) {
    'use strict';

    test.expect(2);

    var actual = grunt.file.read('tmp/livescript.js');
    var expected = grunt.file.read('test/expected/livescript.js');
    test.equal(expected, actual + '\n', 'should compile livescript to javascript');

    actual = grunt.file.read('tmp/concat.js');
    expected = grunt.file.read('test/expected/concat.js');
    test.equal(expected, actual + '\n', 'should compile multiple livescript files to a single javascript file');

    test.done();
  }
};

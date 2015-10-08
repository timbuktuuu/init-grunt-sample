'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'build-js',
    [
      'clean:js',
      'jshint',
      'jscs',
      'concat:js',
      'uglify'
    ]
  );
};

'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'build',
    [
      'clean:dist',
      'syncAssets',
      'jshint',
      'jscs',
      'uglify',
      'notify'
    ]
  );
};

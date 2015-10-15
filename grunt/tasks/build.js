'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'build',
    [
      'clean:dist',
      'jshint',
      'jscs',
      'syncAssets',
      'uglify',
      'notify'
    ]
  );
};

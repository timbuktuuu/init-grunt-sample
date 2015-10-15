'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'build',
    [
      'clean:dist',
      'syncAssets',
      'jshint',
      'jscs',
      'concat:jsVendors',
      'concat:js',
      'uglify',
      'notify'
    ]
  );
};

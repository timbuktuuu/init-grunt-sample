'use strict';
module.exports = function(grunt) {
  grunt.registerTask(
    'syncAssets',
    [
      'jshint',
      'jscs',
      'concat:jsVendors',
      'concat:js',
      'scsslint',
      'compass:dev',
      'sync'
    ]
  );
};

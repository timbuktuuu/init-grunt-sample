'use strict';
module.exports = function (grunt) {
  grunt.registerTask(
    'default',
    [
      'clean:dist',
      'syncAssets',
      'watch:assets'
    ]
  );
};

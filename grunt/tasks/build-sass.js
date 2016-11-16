'use strict';
module.exports = function (grunt) {
  grunt.registerTask(
    'build-sass',
    [
      'clean:css',
      'sasslint',
      'sass:dev',
      'postcss'
    ]
  );
};

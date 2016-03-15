/**
 * This plugin will compress and mangle the input files using
 * the provided options.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-jscs
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('eslint', {
    target:  [
      'Gruntfile.js',
      'grunt/**/*.js',
      'src/js/**/*.js'
    ]
  });

  grunt.loadNpmTasks('grunt-eslint');
};

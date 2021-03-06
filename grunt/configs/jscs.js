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
module.exports = function (grunt) {
  grunt.config.set('jscs', {
    src:  [
      'Gruntfile.js',
      'grunt/**/*.js',
       require('../pipeline').jsFilesToInject
    ],
    options: {
      config: '.jscsrc',
      // must be the same as in .jshintignore
      excludeFiles: [
        'src/js/vendors/**'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-jscs');

};

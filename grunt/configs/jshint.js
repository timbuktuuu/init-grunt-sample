/**
 * This plugin will compress and mangle the input files using
 * the provided options.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jshint
 *
 */

'use strict';
module.exports = function (grunt) {
  grunt.config.set('jshint', {
    options: {
      jshintrc: true
    },
    all: [
      'Gruntfile.js',
      'grunt/**/*.js',
       require('../pipeline').jsFilesToInject
      // '<%= pkg.jsSrc %>/**/*.js'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};

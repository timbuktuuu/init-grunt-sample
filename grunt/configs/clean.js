/**
 * Due to the destructive nature of this task, always be
 * cautious of the paths you clean.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt ~0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('clean', {
    dist: {
      src: ['dist']
    },

    css: {
      src: ['dist/css']
    },

    js: {
      src: ['dist/js']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};

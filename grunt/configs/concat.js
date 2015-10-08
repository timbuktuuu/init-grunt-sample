/**
 * Concatenates files
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-concat
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('concat', {
    options: {
      stripBanners: true
    },

    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: 'dist/js/app.js'
    },

    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: 'dist/css/main.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};

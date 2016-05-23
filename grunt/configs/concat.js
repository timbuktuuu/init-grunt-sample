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
module.exports = function (grunt) {
  grunt.config.set('concat', {
    options: {
      stripBanners: true,
      banner : '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
    },

    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: 'dist/js/app.js'
    },

    jsVendors: {
      src: require('../pipeline').jsVendorsToInject,
      dest: 'dist/js/vendors.min.js'
    },

    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: 'dist/css/main.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};

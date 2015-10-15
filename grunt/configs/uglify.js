/**
 * This plugin will check the JS for syntax and other logical
 * errors
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('uglify', {
    default: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        preserveComments: 'some',
        report: 'min',
        sourceMap: true
      },
      files: {
        'dist/js/app.min.js': ['dist/js/app.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};

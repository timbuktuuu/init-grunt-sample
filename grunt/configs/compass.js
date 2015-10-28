/**
 * Compass is an open-source authoring framework for
 * the Sass css preprocessor. It helps you build stylesheets
 * faster with a huge library of Sass mixins and functions,
 * advanced tools for spriting, and workflow improvements
 * including file based Sass configuration and a simple pattern
 * for building and using Compass extensions.
 *
 * ---------------------------------------------------------------
 *
 * This task requires you to have Ruby, Sass, and
 * Compass >=1.0.1 installed.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-compass
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('compass', {
    options: {
      sassDir: 'src/scss',
      cssDir: 'dist/css',
      imagesDir: 'src/img',
      fontsDir: 'src/fonts',
      httpImagesPath: '../img',
      httpFontsPath: '../fonts',
      raw: 'Encoding.default_external = \'utf-8\'\n'
    },

    dev: {
      options: {
        environment: 'development',
        outputStyle: 'expanded',
        sourcemap: true
      }
    },

    prod: {
      options: {
        environment: 'production',
        outputStyle: 'compressed',
        sourcemap: false,
        noLineComments: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};

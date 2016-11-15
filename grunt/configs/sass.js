/**
 *
 * This task uses libsass, which is a Sass compiler in C++.
 * It's a lot faster than the original Ruby compiler and fully compatible.
 *
 * eyeglass is a node-sass (github) extension manager built on top of npm.
 * Using eyeglass, you can bring the power of node modules to your Sass files.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/sindresorhus/grunt-sass
 * For eyeglass usage docs see:
 *    https://github.com/sass-eyeglass/eyeglass
 *
 */
var eyeglass = require("eyeglass");

'use strict';
module.exports = function (grunt) {
  grunt.config.set('sass', {
    options: eyeglass({
      sourceMap: true
    }),
    dev: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['scss/*.scss'],
        dest: 'dist/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');

};

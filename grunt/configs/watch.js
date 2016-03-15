/**
 * Run predefined tasks whenever watched file patterns
 * are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt ~0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('watch', {
    assets: {
      // Provide livereload
      options: {
        livereload: true,
        spawn: false
      },
      // Assets to watch:
      files: ['src/js/**/*.js', 'src/scss/**/*.{scss,sass}'],

      // When assets are changed:
      tasks: ['syncAssets']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};

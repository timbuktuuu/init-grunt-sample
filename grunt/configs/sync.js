/**
 * A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 * For usage docs see:
 * 		https://github.com/tomusdrw/grunt-sync
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('sync', {
    default: {
      files: [{
        cwd: 'src',
        src: [
          'fonts/**/*.{woff,woff2,eot,svg,ttf}',
          'img/**', '!**/*.coffee',
          '!**/*.{scss,sass}',
          '!**/js/'
        ],
        dest: 'dist'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sync');
};

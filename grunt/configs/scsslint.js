/**
 * A grunt task to check your written .scss Files.
 *
 * For usage docs see:
 * 		https://github.com/ahmednuaman/grunt-scss-lint
 *
 */

'use strict';
module.exports = function(grunt) {
  grunt.config.set('scsslint', {
    all: [
      'src/scss/**/*.scss',
    ],
    options: {
      config: '.scss-lint.yml',
      reporterOutput: 'scss-lint-report.xml',
      exclude: 'src/scss/vendor/**',
      colorizeOutput: true,
      compact: true
    }
  });

  grunt.loadNpmTasks('grunt-scss-lint');

};

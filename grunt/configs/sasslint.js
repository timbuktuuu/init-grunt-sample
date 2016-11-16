/**
 * A grunt task to check your written .scss Files.
 *
 * For usage docs see:
 * 		https://github.com/ahmednuaman/grunt-scss-lint
 *
 */

'use strict';
module.exports = function (grunt) {
  grunt.config.set('sasslint', {
    options: {
      configFile: '.scss-lint.yml',
      outputFile: 'scss-lint-report.xml'
    },
    all: [
      'src/scss/**/*.scss',
    ]
  });

  grunt.loadNpmTasks('grunt-sass-lint');

};

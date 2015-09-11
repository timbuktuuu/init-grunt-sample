/**
 * This plugin will compress and mangle the input files using
 * the provided options.
 *
 * ---------------------------------------------------------------
 *
 * This plugin requires Grunt >=0.4.0
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */

module.exports = function(grunt) {
  grunt.config.set('uglify', {
    default: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        preserveComments: 'some',
        report: 'min'
      },
      files: {
        'dist/js/vendor.min.js': ['dist/js//vendor.js'],
        'dist/js/components.min.js': ['dist/js/components.js'],
        'dist/js/app.min.js': ['dist/js/app.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};

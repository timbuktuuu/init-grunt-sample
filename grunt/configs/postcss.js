/**
 * PostCSS is a tool for transforming styles with JS plugins.
 * These plugins can lint your CSS, support variables and mixins,
 * transpile future CSS syntax, inline images, and more.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/postcss/postcss
 */
'use strict';

module.exports = function(grunt) {
	grunt.config.set('postcss', {
    options: {
      map: true,
			processors: [
        require('autoprefixer')({
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        })
      ],
    },
    dist: {
      files: [{
        expand: true,
        flatten: true,
        src: require('../pipeline').cssFilesToInject,
        dest: 'dist/scss/'
      }]
    }
	});
	grunt.loadNpmTasks('grunt-postcss');
};

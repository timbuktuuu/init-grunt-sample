/**
 * Automatic desktop notifications for Grunt errors and
 * warnings using Growl for OS X or Windows, Mountain Lion
 * and Mavericks Notification Center, and Notify-Send.
 *
 * ---------------------------------------------------------------
 *
 * This plugin recommends Grunt 0.4.1 or newer.
 *
 * For usage docs see:
 * 		https://github.com/dylang/grunt-notify
 *
 */

'use strict';
module.exports = function (grunt) {
  grunt.config.set('notify', {
    build: {
      options: {
        title: 'Build Task Completed',
        message: 'Build successfully done without Errors',
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');

};

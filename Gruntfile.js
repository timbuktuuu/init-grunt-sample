'use strict';
module.exports = function(grunt) {
  /**
   * Load the include-all library in order to require all of our
   * grunt configurations and task registrations dynamically.
   */
  var includeAll;
  var taskConfigurations;
  var registerDefinitions;

  try {
    includeAll = require('include-all');
  } catch (e0) {
    try {
      includeAll = require('static/node_modules/include-all');
    } catch (e1) {
      console.error('Could not find `include-all` module.');
      console.error('Skipping grunt tasks...');
      console.error('To fix this please run:');
      console.error('npm install include-all --save');

      grunt.registerTask('default', []);
      return;
    }
  }

  /**
   * Loads Grunt configuration modules from the specified
   * relative path. These modules should export a function
   * that, when run, should either load/configure or register
   * a Grunt task.
   */
  function loadTasks(relPath) {
    return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: /(.+)\.js$/
    }) || {};
  }

  /**
   * Invokes the function from a Grunt configuration module with
   * a single argument - the `grunt` object.
   */
  function invokeConfigFn(tasks) {
    var taskName;
    for (taskName in tasks) {
      if ({}.hasOwnProperty.call(tasks, taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  /**
   * Load task functions
   */
  taskConfigurations = loadTasks('./grunt/configs/');
  registerDefinitions = loadTasks('./grunt/tasks/');

  // // (ensure that a default task exists)
  // if (!registerDefinitions.default) {
  //   registerDefinitions.default = function(grunt) {
  //     grunt.registerTask('default', []);
  //   };
  // }

  // Run task functions to configure Grunt.
  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerDefinitions);
};

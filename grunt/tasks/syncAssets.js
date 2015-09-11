module.exports = function (grunt) {
  grunt.registerTask(
    'syncAssets',
    [
      'concat:js',
      'compass:dev',
      'sync'
    ]
  );
};

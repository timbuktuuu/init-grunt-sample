module.exports = function (grunt) {
  grunt.registerTask(
    'build',
    [
      'clean:dist',
      'syncAssets',
      'uglify',
      'notify'
    ]
  );
};

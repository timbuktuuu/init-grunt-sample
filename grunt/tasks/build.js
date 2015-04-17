module.exports = function (grunt) {
  grunt.registerTask(
    'build', 
    [
      'clean:dist',
      'concurrent:dist',
      'concat',
      'copy:build',
      'uglify',
      'filerev',
      'notify:build'
    ]
  );
};

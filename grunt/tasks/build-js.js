module.exports = function (grunt) {
  grunt.registerTask(
    'build-js',
    [
      'clean:js',
      'concat:js',
      'uglify'
    ]
  );
};

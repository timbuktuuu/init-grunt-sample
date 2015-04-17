module.exports = function (grunt) {
  grunt.registerTask(
    'build-sass', 
    [
      'clean:sass',
      'compass:dev'
    ]
  );
};

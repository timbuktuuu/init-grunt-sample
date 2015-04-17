module.exports = function (grunt) {
  grunt.registerTask(
    'syncAssets', 
    [
      'newer:concat',
      'newer:uglify',
      'compass:dev',
      'sync:dist'
    ]
  );
};

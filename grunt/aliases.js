module.exports = {
  'default': [
    'watch'
  ],
  
  'build-js': [
    'clean:js',
    'newer:concat',
    'newer:uglify',
    'notify:js'
  ],
  
  'build-sass': [
    'clean:sass',
    'compass:dev',
    'notify:sass'
  ],
  
  'build': [
    'clean:dist',
    'concurrent:dist',
    'concat',
    'copy:dist',
    'uglify',
    'filerev',
    'notify:build'
  ]
};
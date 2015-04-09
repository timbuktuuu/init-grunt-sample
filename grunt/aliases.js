module.exports = {
  'default': [
    'clean:dist',
    'syncAssets',
    'watch:assets'
  ],
  
  'build-js': [
    'clean:js',
    'newer:concat',
    'newer:uglify'
    //'notify:js'
  ],
  
  'build-sass': [
    'clean:sass',
    'compass:dev'
    //'notify:sass'
  ],
  
  'build': [
    'clean:dist',
    'concurrent:dist',
    'concat',
    'copy:build',
    'uglify',
    'filerev',
    'notify:build'
  ],
  
  'syncAssets': [
    'build-js',
    'compass:dev',
    'sync:dist'
  ]
};
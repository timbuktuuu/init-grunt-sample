module.exports = function(grunt) {
  
  var path = require('path');

  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt, {
    // path to alias.js file,  defaults to grunt dir
    jitGrunt: {
        customTasksDir: path.join(process.cwd(), 'grunt/tasks')
    },
    // path to config.js files, defaults to grunt dir
    configPath: path.join(process.cwd(), 'grunt/configs'),
    
    // data passed into config.  Can use with <%= test %>
    data: {
      app: require('./bower.json').appPath || 'src',
      dist: 'dist',
      imgSrc: 'src/img',
      fontSrc: 'src/fonts',
      jsSrc: 'src/js',
      jsDest: 'dist/js',
      cssSrc: 'src/scss',
      cssDest: 'dist/css',
      banner : '/*! <%= package.title || package.name %> - v<%= package.version %> - ' + '<%= package.author %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
    },
  });

};

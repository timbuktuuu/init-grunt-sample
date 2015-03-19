module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },

  vendor: {
    src: [
      '<%= jsSrc %>/vendor/jquery-1.11.1.js',
      '<%= jsSrc %>/libs/modernizr*.js'
    ], 
    dest: '<%= jsDest %>/vendor.js'
  },
  
  components: {
    src : [
      '<%= jsSrc %>/components/*.js',
      '<%= jsSrc %>/components/**/*.js'
    ],
    dest : '<%= jsDest %>/components.js'
  },

  app: {
    src: [
      '<%= jsSrc %>/app.js'
    ], 
    dest: '<%= jsDest %>/app.js' 
  }
};
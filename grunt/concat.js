module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },

  vendor: {
    src: [
      '<%= app %>/vendor-repo/jquery/dist/jquery.js',
      '<%= app %>/vendor-repo/modernizr/modernizr.js'
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
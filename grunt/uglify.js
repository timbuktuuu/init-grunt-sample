module.exports = {
  options: {
    mangle: {
      except: ['jQuery']
    },
    preserveComments: 'some',
    banner: '<%= banner %>',
    report: 'min'
  },
  
  server: {
    files: {
      '<%= jsDest %>/vendor.min.js': ['<%= jsDest %>/vendor.js'],
      '<%= jsDest %>/components.min.js': ['<%= jsDest %>/components.js'],
      '<%= jsDest %>/app.min.js': ['<%= jsDest %>/app.js']
    }
  }
};
module.exports = function(grunt) {
  grunt.initConfig({
      jshint: {
          files: ['js/*.js', 'js/!*.min.js'],
          options: {
              esversion: 6
          }
      },
      watch:{
        sass:{
          files:  ['scss/*.scss'],
          tasks:['sass','cssmin']
        },
        js:{
          files:['js/*.js','js/!*.min.js'],
          tasks:['jshint','uglify']
        }
      },
      csslint:{
          strict: {
            options: {
              import: 2
            },
            src: ['css/*.css']
          }
      },
      cssmin: {
        target: {
          files: {
            'output.css': ['css/*.css']
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'js/script.min.js': ['js/script.js']
          }
        }
      },
      sass:{
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/style.css': 'scss/*.scss'
          }
        }
      }


  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('checkJS', ['jshint']);
  grunt.registerTask('default',['watch']);
  grunt.registerTask('csslint',['csslint']);
  grunt.registerTask('minifyCSS',['cssmin']);
  grunt.registerTask('compile',['sass']);
};

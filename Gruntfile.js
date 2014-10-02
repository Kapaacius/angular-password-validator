module.exports = function(grunt){
  'use strict';

  grunt.initConfig({

    uglify : {
      production : {
        src: [ 'src/angular-password-validator.js' ],
        dest: 'dist/angular-password-validator.min.js'
      }
    },

    copy : {
      production : {
        files : [
          {
            src: 'src/angular-password-validator.js',
            dest : 'dist/angular-password-validator.js'
          }
        ]
      }
    },

    karma : {
      spec : {
        configFile : 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', [ 'karma' ]);
  grunt.registerTask('default', [ 'test', 'copy', 'uglify' ])
};
module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat:{
      options:{
        separator:';\n'
      },
      bower_js:{
        src:[
          'bower_components/angular/angular.min.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/semantic/dist/semantic.min.js'
        ],
        dest: 'public/javascripts/lib.min.js',
        nonull: true
      },
      bower_css: {
        src: [
          'bower_components/semantic/dist/semantic.min.css'
        ],
        dest: 'public/stylesheets/lib.min.css',
        nonull: true
      },
    },
    
    jshint:{
      files:['Gruntfile.js','development/**/*.js'],
      options: {
        globals:{
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy")%>  */\n',
        sourceMap: true
      },
      dist:{
        files: {
          'public/javascripts/app.min.js': ['app/**/*.js']
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'concat','uglify']
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'bower_components/semantic/dist',
          src: ['themes/**'],
          dest: 'public/stylesheets/'
        },{
          expand: true,
          cwd: 'bower_components/angular/',
          src: ['angular.min.js.map'],
          dest: 'public/javascripts/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint','concat','uglify']);
  grunt.registerTask('init',['copy']);
  grunt.registerTask('development',['jshint','concat','uglify','watch']);
};

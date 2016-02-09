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
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/semantic/dist/semantic.min.js',
          'bower_components/d3/d3.min.js',
          'bower_components/d3-cloud/build/d3.layout.cloud.js'
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
      files:['Gruntfile.js','app/**/*.js'],
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
      my_javascript:{
        files: {
          'public/javascripts/app.min.js': ['app/**/*.js']
        }
      }
    },

    cssmin:{
        options:{
            shorthandCompacting: false,
            roundinggPrecision: -1
        },
        my_css:{
            files:{
                'public/stylesheets/app.min.css':['app/**/*.css']
            }
        }
    },

    watch: {
      files: ['<%= jshint.files %>', 'app/**/*.css'],
      tasks: ['jshint', 'concat','uglify','cssmin']
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
        },
        {
          expand: true,
          cwd: 'bower_components/jquery/dist/',
          src:['jquery.min.map'],
          dest: 'public/javascripts/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint','concat','uglify','cssmin']);
  grunt.registerTask('init',['copy']);
  grunt.registerTask('development',['jshint','concat','uglify','cssmin','watch']);
};

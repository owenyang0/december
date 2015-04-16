var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

var config = {
  sass: {
    path: 'scss/',
    extension: '.scss',
    options: {
      errLogToConsole: true,
      includePaths: [
        'node_modules/jeet/scss/'
      ]
    }
  },
  css: {
    path: 'css/'
  }
};

gulp.task('clean', function(cb){
  del([config.css.path], cb);
});

gulp.task('sass', function(){
  return gulp.src(config.sass.path + '**/*' + config.sass.extension)
             .pipe(sass(config.sass.options))
             .pipe(gulp.dest(config.css.path));
});

gulp.task('watch', function(){
  gulp.watch(config.sass.path + '**/*' + config.sass.extension, ['sass']);
});

gulp.task('build', ['clean'], function(){
  gulp.start(['sass']);
});

gulp.task('default', ['watch', 'build']);

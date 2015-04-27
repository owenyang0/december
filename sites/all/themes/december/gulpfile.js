var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var connect = require('gulp-connect');

var config = {
  sass: {
    path: 'preprocess/scss/',
    extension: '.scss',
    options: {
      errLogToConsole: true,
      outputStyle: 'compressed',
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
  gulp.watch(config.sass.path + '**/*' + config.sass.extension, ['sass', 'html']);
  gulp.watch(['./pages/*.html'], ['html']);
});

gulp.task('build', ['clean'], function(){
  gulp.start(['sass']);
});

gulp.task('default', ['build', 'connect', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./pages/*.html')
    .pipe(connect.reload());
});

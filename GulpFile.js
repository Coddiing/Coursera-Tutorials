'use strict';

// Including Node model. 
// Gulp is a code-based way of configuring task.
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// Configuring gulp
/**
 * gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

  gulp.task('sass', gulp.series(function () {
    return gulp.src('./css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
   
  }));
  
  gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', ['sass']);
  });
  
  gulp.task('browser-sync', function () {
     var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
     ];
  
     browserSync.init(files, {
        server: {
           baseDir: "./"
        }
     });
  
  });
  
  // Default task
  gulp.task('default', gulp.series('server', 'watch'));

 */




gulp.task( 'sass', done => {
    gulp.watch('./css/*.scss', ['sass']);
    done();
});
  


gulp.task( "default", gulp.parallel( "sass" ) );
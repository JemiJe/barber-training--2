var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
//var concatCss = require('gulp-concat-css');

gulp.task('sass', function () {

  return gulp.src('sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'));

});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        notify: false
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("./**/*.{html,css,scss}").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
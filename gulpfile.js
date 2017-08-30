

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
//var concatCss = require('gulp-concat-css');
 
gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('css'));
});

gulp.task('clean:css', function () {
    return gulp.src('css/style.css', {read: false})
        .pipe(clean());
});

gulp.task('server', ['sass'], function() {
    
        browserSync.init({
            server: "./",
            notify: false
        });
    
        gulp.watch("sass/**/*.scss", ['sass']);
        // gulp.watch("./**/*.{html,css,scss}").on('change', browserSync.reload);
    });

// gulp.task('watch:scss', ['sass'], function() {
//     gulp.watch("sass/**/*.scss", ['sass']);
// });

gulp.task('run-me', ['server']);


// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./",
//         notify: false
//     });

//     gulp.watch("sass/**/*.scss", ['sass']);
//     gulp.watch("./**/*.{html,css,scss}").on('change', browserSync.reload);
// });

// gulp.task('run', ['serve']);


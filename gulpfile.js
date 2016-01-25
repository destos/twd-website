'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
var webserver = require('gulp-webserver')

gulp.task('scss', function () {
  gulp.src('scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('src/css/'))
  .pipe(livereload())
})

gulp.task('webserver', function () {
  gulp.src('src/')
    .pipe(webserver({
      open: true,
      port: 8080
    }))
})

gulp.task('html', function () {
  return gulp.src([
    'src/**/*.html'
  ])
  .pipe(livereload())
})

gulp.task('watch', function () {
  livereload.listen()
  gulp.watch('src/*.html', ['html'])
  gulp.watch('scss/**/*.scss', ['scss'])
})

gulp.task('build', ['scss'])
gulp.task('default', ['webserver', 'watch'])

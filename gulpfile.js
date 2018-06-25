var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browsersync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task('default', function(test) {
//   console.log('Gulp js is running');
//   test();

// });

gulp.task('sass', function(done) {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        //.pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('./css')) 
        done();

});

gulp.task('scripts', function(done) {
  return gulp.src('./js/script.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({ stream: true }));
    done();
});

// BrowserSync (callback)
gulp.task('browserSync', function(done) {
  browsersync.init({
    server: {
       baseDir: "./",
       index: "template.html"
    },
    port: 3000
  });
  done();
});

// BrowserSync Reload (callback)
gulp.task('browserSyncReload',function (done) {
  browsersync.reload();
  done();
});




gulp.task('watch', function(done) {
    gulp.watch("scss/**/*.scss", gulp.series(['sass','browserSyncReload']))
	gulp.watch("js/script.js", gulp.parallel(['scripts','browserSyncReload']))
    done();
});


gulp.task('start', gulp.parallel(
  'browserSync','watch'
));
//gulp.task('runSass', gulp.series(sass));




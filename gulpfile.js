var gulp = require('gulp');
//var sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));
var watch = require('gulp-watch');
const browsersync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel'); 
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");


// gulp.task('default', function(test) {
//   console.log('Gulp js is running');
//   test();

// });

gulp.task('html', function(done) {
    return gulp.src('*.html')
    done();

});

// gulp.task('sass', function(done) {
//     return gulp.src('./scss/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         //.pipe(browserSync.reload({ stream: true }))
//         .pipe(gulp.dest('./css'))
//     done();
// });


//Temporarly for testing!!
gulp.task('sass2', function(done) {
    return gulp.src('./scss2/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        //.pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('./css2'))
    done();
});
// end


gulp.task('scripts', function(done) {
    return gulp.src(['./js/sandbox.js','./js/assesment.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
        //.pipe(browserSync.reload({ stream: true }));
    done();
});


//use babel for ES6 minifier
gulp.task('minjs', () => {
    return gulp.src([
    //'node_modules/@babel/polyfill/dist/polyfill.js',
    './js/sandbox.js'
    ])
      .pipe(babel(
        //   {presets: ['es2015','es2016']}
          {
            "presets": [["@babel/preset-env", { "targets": "defaults" }]]
          }
      
      ))
    //   .pipe(uglify())
    .pipe(concat('sandboxDist.js'))
    //.pipe(rename('sandboxDist.js'))
      .pipe(gulp.dest('./dist/js'));
  });


// BrowserSync (callback)
gulp.task('browserSync', function(done) {
    browsersync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        },
        port: 3000
    });
    done();
});

// BrowserSync Reload (callback)
gulp.task('browserSyncReload', function(done) {
    browsersync.reload();
    done();
});




gulp.task('watch', function(done) {
    gulp.watch("*.html", gulp.series(['browserSyncReload']))
    //gulp.watch("scss/**/*.scss", gulp.series(['sass', 'browserSyncReload']))
    //for testing
    gulp.watch("scss2/**/*.scss", gulp.series(['sass2', 'browserSyncReload']))
    gulp.watch("js/**.js", gulp.parallel(['scripts','minjs', 'browserSyncReload']))
    done();
});


gulp.task('start', gulp.parallel(
    'browserSync', 'watch'
));
//gulp.task('runSass', gulp.series(sass));
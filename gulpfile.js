var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

var jsyaml = require('js-yaml');
var fs = require('fs');

var deploy = require("gulp-gh-pages");

var gitRemoteUrl = "git@github.com:gopilot/event-base.git"

gulp.task('deploy', function () {
    gulp.src("./out/**/*")
        .pipe(deploy(gitRemoteUrl));
});

// compile css
gulp.task('stylus', function () {
    return gulp.src('./css/master.styl')
        .pipe(stylus({use: ['nib']}))
        .pipe(gulp.dest('./out/css'));
});

// compile our HTML
gulp.task('html', function() {
    var locals = jsyaml.load(fs.readFileSync('./info.yaml', 'utf8'));
    console.log(locals);
    return gulp.src('./index.jade')
        .pipe(jade({
            locals: locals
        }))
        .pipe(gulp.dest('./out'));
});

gulp.task('default', function(){
    gulp.run('stylus');
    gulp.run('html');
});

gulp.task('static', function(){
    gulp.src('./static/**')
        .pipe(gulp.dest('./out'));

});

gulp.task('watch', function() {
  gulp.watch('./static/**', ['static']);
  gulp.watch('./css/*.styl', ['stylus']);
  gulp.watch(['./*.jade', './components/*.jade', './info.yaml'], ['html']);
});


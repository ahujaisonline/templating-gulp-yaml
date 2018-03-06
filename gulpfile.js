var gulp = require('gulp');
var panini = require('panini');

gulp.task('default', function() {
    gulp.src('src/pages/**/*')
      .pipe(panini({
        root: 'src/pages/',
        layouts: 'src/layouts/',
        partials: 'src/partials/',
        helpers: 'src/helpers/',
        data: 'src/data/'
      }))
      .pipe(gulp.dest('build'));
  });

  gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
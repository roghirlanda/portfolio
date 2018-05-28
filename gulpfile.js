var gulp = require( 'gulp' );
var minifycss = require( 'gulp-minify-css' );
var sass = require( 'gulp-sass' );
var notify = require( 'gulp-notify' );



gulp.task( 'css', function() {
  gulp.src( 'style.scss' )
    .pipe( sass() )
    .pipe( minifycss() )
    .pipe( gulp.dest( 'css' ) )

    .pipe( notify( 'CSS OK!' ) );
});
gulp.task( 'default', function() {
  gulp.watch( 'style.scss' , [ 'css' ] );
});
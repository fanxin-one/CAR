var gulp = require('gulp');//引入gulp模块儿
var less = require('gulp-less');//引入gulp-less模块儿
var bs = require('browser-sync');

gulp.task('less',function(){
    gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))//自动生成dist文件和css文件夹及下面的css文件。

});
gulp.task('Server',['less'],function(){
    bs.init({
        server:{
            baseDir:'./',//根目录下的
            index:'index.html'
        }
    });
    gulp.watch('src/less/*.less',['less']);
    gulp.watch('dist/css/*.css').on('change',bs.reload);
    gulp.watch('*.html').on('change',bs.reload);
});
gulp.task('default',['Server']);//执行default，关联执行server.
let gulp = require('gulp')
let sprite = require('gulp.spritesmith')
gulp.task('sprite',(done)=>{
  gulp.src('./*.jpg')
  .pipe(sprite({
    imgName:'sprite.jpg',
    cssName:'sprite.css'
  }))
  .pipe(gulp.dest('result'))
  done()
})
const babel = require('gulp-babel');
const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
var log = require('fancy-log');

// Task to delete target build folder
gulp.task('clean', function () {
    return del(['./lib']);
});

gulp.task('static', () => {
    return gulp.src(['src/**/*.json', 'src/**/*.svg', 'src/**/*.jpg', 'src/**/*.png'])
        .pipe(gulp.dest('./lib'));
});

gulp.task('scss', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ extname: '.scss' }))
        .pipe(gulp.dest('./lib/scss'));
});

//Sass không build được những file scss, css ở folder symlink nên trong trường hợp chỉ cần scss ở file build cho mục địch import, ta dùng task scss-copy
gulp.task('scss-copy', () => {
    return gulp.src('src/**/*.scss', { follow: true })
        .pipe(gulp.dest('./lib'));

});

gulp.task('less', () => {
    return gulp.src('src/**/*.less')
        .pipe(less({ javascriptEnabled: true }))
        .pipe(rename({ extname: '.less' }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('css', () => {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('./lib'));
});

gulp.task('styles', gulp.series(['scss-copy', 'less', 'css']));
gulp.task('full', gulp.series(['clean', 'styles', 'static']));
gulp.task('vitest', gulp.series(['clean', 'styles', 'static']));
gulp.task('default', gulp.series(['styles', 'static']));

gulp.task('watch', function () {
    gulp.watch([
        'src/**/*.json',
        'src/**/*.svg',
        'src/**/*.scss',
        'src/**/*.css',
        'src/**/*.less',
    ], gulp.series(['vitest']));
});

/**
 * Fix import at built result, so we doesn't need to import the whole `antd` package
 */
gulp.task('import', () =>
    gulp.src(['lib/**/*.js'])
        .pipe(babel({
            'plugins': [
                [
                    'import',
                    {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                    },
                ],
                [
                    'import',
                    {
                        'libraryName': '@ant-design/icons',
                        camel2DashComponentName: false,
                        'customName': (transformedMethodName) => {
                            if (transformedMethodName === 'default') {
                                return '@ant-design/icons/es/components/Icon';
                            }
                            return `@ant-design/icons/${transformedMethodName}`;
                        },
                    },
                    'icon',
                ],
            ],
        }))
        .pipe(gulp.dest('./lib')),
);
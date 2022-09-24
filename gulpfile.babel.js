// este es el formato para ES6+, para esto el archivo tiene babel y requiere instalar babel con npm
import gulp from "gulp"; // para automatizar procesos
import yargs from "yargs"; // para recibir argumentos como --prod
import cleanCSS from "gulp-clean-css"; // para minimizar el css
import gulpIf from "gulp-if"; //para ejecutar una terea en función de una condicional
import sourcemaps from "gulp-sourcemaps"; // para generar el mapa de SASS en el CSS en desarrollo
import imagemin from "gulp-imagemin"; // para minimizar imágenes
import del from "del"; //para borrar carpetas y archivos
import autoprefixer from "gulp-autoprefixer"; // para poner prefijos en la versión de producción
import webpack from "webpack-stream"; // para empaquetar los archivos de js en uno solo
import named from "vinyl-named";
import browserSync from "browser-sync";
import zip from "gulp-zip";
import replace from "gulp-replace";
import info from "./package.json";

const server = browserSync.create();

const sassComp = require("gulp-sass")(require("sass")); // es el compilador de SASS que no pude inicalizarse usando import porque requiere gulp-sass y sass

// el último argumento es un nombre personalizado
const PRODUCTION = yargs.argv.prod;

const paths = {
  styles: {
    src: ["src/assets/sass/bundle.sass", "src/assets/sass/admin.sass"],
    dest: "dist/assets/css",
  },
  images: {
    src: ["src/assets/images/**/*.{jpg, jpeg, png, gif, svg}"],
    dest: "dist/assets/images",
  },
  scripts: {
    src: ["src/assets/js/bundle.js", "src/assets/js/admin.js"],
    dest: "dist/assets/js",
  },
  other: {
    src: [
      "src/assets/**/*",
      "!src/assets/{sass,js,images}",
      "!src/assets/{sass,js,images}/**/*",
    ],
    dest: "dist/assets",
  },
  package: {
    src: [
      "**/*",
      "!.vscode",
      "!node_modules{,/**}",
      "!vendor{,/**}",
      "!packaged{,/**}",
      "!src{,/**}",
      "!.babelrc",
      "!.gitignore",
      "!.git",
      "!gulpfile.babel.js",
      "!package.json",
      "!package-lock.json",
      "!composer.json",
    ],
    dest: "packaged",
  },
};

export const serve = (done) => {
  server.init({
    proxy: "http://ucuenca.local/",
    browser: "chrome",
  });
  done();
};

export const reload = (done) => {
  server.reload();
  done();
};

// ------- esta tarea borra la carpeta dist
export const clean = () => del(["dist"]);

/**
 * esta tadea compila el sass y localiza los archivos finales en la carpeta
 * dist/assets/cs. Cuando se utiliza la bandera --prod (de producction) el
 * css también se atuprefix y se minimisa
 */
export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpIf(!PRODUCTION, sourcemaps.init()))
    .pipe(sassComp().on("error", (error) => console.log(error)))
    .pipe(
      gulpIf(
        PRODUCTION,
        autoprefixer({
          flexbox: "no-2009",
          // grid: 'autoplace',
        })
      )
    )
    .pipe(gulpIf(PRODUCTION, cleanCSS({ compatibility: "ie8" })))
    .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
};

/**
 * esta tarea observa la carpeta de sass, images y todos los archivos de copy
 * y ejecuta la las respectivas tareas
 */
export const watch = () => {
  gulp.watch("src/assets/sass/**/*.sass", styles);
  gulp.watch("src/assets/js/**/*.js", gulp.series(scripts, reload));
  gulp.watch("**/*.php", reload);
  gulp.watch(paths.images.src, gulp.series(images, reload));
  gulp.watch(paths.other.src, gulp.series(copy, reload));
};

/**
 * esta tarea mueve las imágenes a la carpteta de dist/assets/images
 * cuando se usa la bandera --prod (de producction) las images se minimisan
 */
export const images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(gulpIf(PRODUCTION, imagemin()))
    .pipe(gulp.dest(paths.images.dest));
};

/**
 * esta tarea copia todos los assets de la carpeta src a la carpeta dist
 * la tarea ignora las carpetas de sass, js e images
 */
export const copy = () => {
  return gulp.src(paths.other.src).pipe(gulp.dest(paths.other.dest));
};

/**
 * Esta tarea unifica todos los arvhicos de js en uno solo
 */
export const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"], //or ['babel-preset-env']
                },
              },
            },
          ],
        },
        output: {
          filename: "[name].js",
        },
        devtool: !PRODUCTION ? "inline-source-map" : false,
        mode: PRODUCTION ? "production" : "development", //add this
      })
    )
    .pipe(gulp.dest(paths.scripts.dest));
};

export const compress = () => {
  return gulp
    .src(paths.package.src)
    .pipe(replace("_themename", info.name))
    .pipe(zip(`${info.name}.zip`))
    .pipe(gulp.dest(paths.package.dest));
};

export const dev = gulp.series(
  clean,
  gulp.parallel(styles, copy, images, scripts),
  serve,
  watch
);

export const build = gulp.series(
  clean,
  gulp.parallel(styles, copy, images, scripts)
);

export const bundle = gulp.series(build, compress);

export default dev;

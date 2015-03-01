/**
 * Module Dependencies
 */

var Duo = require('duo');
var fs = require('fs');
var join = require('path').join;
var write = require('fs').writeFileSync;

var uglify = require('uglify-js');
var myth = require('myth');
var CleanCSS = require('clean-css');
var cleancss = new CleanCSS();
var Batch = require('batch');
var babel = require('duo-babel');


/**
 * Settings
 */

var dev = process.env.NODE_ENV === 'development';
var src = __dirname+'/lib/boot/';
var root = process.cwd();
var dest = './build/';
var out = join(root, dest);


/**
 * JS.
 */

var js = Duo(__dirname)
  .development(dev)
  .entry(src + 'index.js')
  .use(babel())
  .buildTo(dest);


/**
 * CSS.
 */

var css = Duo(__dirname)
  .entry(src + 'index.css')
  .buildTo(dest)
  .copy(!dev);


/**
 * Run JS/CSS together
 */

var batch = new Batch();

batch.push(js.run.bind(js));
batch.push(css.run.bind(css));

batch.end(function(err, res){
  if (err) throw err;

  var js = uglify.minify(res.shift(), { fromString: true }).code;
  write(join(out, 'build.js'), js);

  var css = cleancss.minify(myth(res.shift())).styles;
  write(join(out, 'build.css'), css);
});

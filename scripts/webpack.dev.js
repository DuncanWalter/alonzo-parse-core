const webpack = require('webpack');
const Mem     = require('memory-fs');
const config  = require('./webpack');

let mem       = new Mem();
let compiler = webpack(config('dev'));

compiler.outputFileSystem = mem;
compiler.watch({
    aggregateTimeout: 500, 
    poll: true,
}, (err, stat)=>{
    var src = mem.readFileSync('V:\\dist\\algebra.bundle.js').toString();
    let m = new (module.constructor)();
    m._compile(src, 'V:\\dist\\temp.js');
    m.exports.test();
});
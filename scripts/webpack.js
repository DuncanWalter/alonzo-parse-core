var webpack = require('webpack');
var args = require('minimist')(process.argv.slice(2));
var pkgs = require('./../package.json').dependencies;

// ||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//|| \\
// ||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=|| \\
// ||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=|| \\
// ||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\|| \\

/*module config*/
var m = { 
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'flow'],
                cacheDirectory: true,
            }
        }],
    }],
};

/*node config*/
var n = {
    module: "empty", 
    net: "empty", 
    fs: "empty",
};

// ||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//|| \\
// ||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=||=\\//=|| \\
// ||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=||=//\\=|| \\
// ||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\||//||\\|| \\

module.exports = (env)=>{return{
    entry: "./src/index.js",
    output: {
        path: env === 'dev' ? 'V:\\dist' : __dirname + "/../dist",
        filename: "algebra.bundle.js",
        libraryTarget: env === 'dev' ? 'commonjs' : 'jsonp',
    },
    devtool: "cheap-eval-source-map",
    module: m,
    node: n,

    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'common' // Specify the common bundle's name.
    //     })
    // ]
};};